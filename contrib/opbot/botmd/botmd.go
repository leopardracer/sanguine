package botmd

import (
	"context"
	"fmt"

	"github.com/slack-io/slacker"
	"github.com/synapsecns/sanguine/contrib/opbot/config"
	"github.com/synapsecns/sanguine/contrib/opbot/internal"
	screenerClient "github.com/synapsecns/sanguine/contrib/screener-api/client"
	"github.com/synapsecns/sanguine/core/dbcommon"
	"github.com/synapsecns/sanguine/core/metrics"
	"github.com/synapsecns/sanguine/core/metrics/instrumentation/slackertrace"
	experimentalLogger "github.com/synapsecns/sanguine/core/metrics/logger"
	signerConfig "github.com/synapsecns/sanguine/ethergo/signer/config"
	"github.com/synapsecns/sanguine/ethergo/signer/signer"
	"github.com/synapsecns/sanguine/ethergo/submitter"
	cctpSql "github.com/synapsecns/sanguine/services/cctp-relayer/db/sql"
	omnirpcClient "github.com/synapsecns/sanguine/services/omnirpc/client"
	"github.com/uptrace/opentelemetry-go-extra/otelzap"
	"golang.org/x/sync/errgroup"
)

// Bot represents the bot server.
type Bot struct {
	handler   metrics.Handler
	server    *slacker.Slacker
	cfg       config.Config
	rpcClient omnirpcClient.RPCClient
	rfqClient internal.RFQClient
	signer    signer.Signer
	submitter submitter.TransactionSubmitter
	screener  screenerClient.ScreenerClient
	logger    experimentalLogger.ExperimentalLogger
}

// NewBot creates a new bot server.
func NewBot(handler metrics.Handler, cfg config.Config) *Bot {
	server := slacker.NewClient(cfg.SlackBotToken, cfg.SlackAppToken)

	sugaredLogger := otelzap.New(experimentalLogger.MakeZapLogger()).Sugar()

	bot := Bot{
		handler:   handler,
		cfg:       cfg,
		server:    server,
		logger:    experimentalLogger.MakeWrappedSugaredLogger(sugaredLogger),
		rfqClient: internal.NewRFQClient(handler, cfg.RFQIndexerAPIURL),
	}

	bot.rpcClient = omnirpcClient.NewOmnirpcClient(cfg.OmniRPCURL, handler, omnirpcClient.WithCaptureReqRes())

	bot.addMiddleware(slackertrace.TracingMiddleware(handler), slackertrace.MetricsMiddleware())
	bot.addCommands(bot.rfqLookupCommand(), bot.rfqRefund())

	return &bot
}

func (b *Bot) addMiddleware(middlewares ...slacker.CommandMiddlewareHandler) {
	for _, middleware := range middlewares {
		b.server.AddCommandMiddleware(middleware)
	}
}

func (b *Bot) addCommands(commands ...*slacker.CommandDefinition) {
	for _, command := range commands {
		b.server.AddCommand(command)
	}
}

// Start starts the bot server.
// nolint: wrapcheck
func (b *Bot) Start(ctx context.Context) (err error) {
	if err := b.cfg.Validate(); err != nil {
		return fmt.Errorf("config validation failed: %w", err)
	}

	b.signer, err = signerConfig.SignerFromConfig(ctx, b.cfg.Signer)
	if err != nil {
		return fmt.Errorf("failed to create signer: %w", err)
	}

	dbType, err := dbcommon.DBTypeFromString(b.cfg.Database.Type)
	if err != nil {
		return fmt.Errorf("could not get db type: %w", err)
	}

	store, err := cctpSql.Connect(ctx, dbType, b.cfg.Database.DSN, b.handler)
	if err != nil {
		return fmt.Errorf("could not connect to database: %w", err)
	}

	b.submitter = submitter.NewTransactionSubmitter(b.handler, b.signer, b.rpcClient, store.SubmitterDB(), &b.cfg.SubmitterConfig)

	screenerClient, err := screenerClient.NewClient(b.handler, b.cfg.ScreenerURL)
	if err != nil {
		return fmt.Errorf("could not create screener client: %w", err)
	}
	b.screener = screenerClient

	g, ctx := errgroup.WithContext(ctx)
	g.Go(func() error {
		return b.submitter.Start(ctx)
	})

	g.Go(func() error {
		return b.server.Listen(ctx)
	})

	// nolint: wrapcheck
	return g.Wait()
}
