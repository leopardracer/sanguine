// Package cmd provides the command line interface for the opbot.
package cmd

import (
	"fmt"

	"github.com/synapsecns/sanguine/core/commandline"
	"github.com/synapsecns/sanguine/core/config"
	"github.com/synapsecns/sanguine/core/metrics"
	"github.com/urfave/cli/v2"
)

// Start starts the command line tool.
func Start(args []string, buildInfo config.BuildInfo) {
	app := cli.NewApp()
	app.Name = buildInfo.Name()

	app.Description = buildInfo.VersionString() + "Opbot is a tool to manage operations."
	app.Usage = fmt.Sprintf("%s --help", buildInfo.Name())
	app.EnableBashCompletion = true
	app.Before = func(c *cli.Context) error {
		// nolint:wrapcheck
		return metrics.Setup(c.Context, buildInfo)
	}
	app.Commands = cli.Commands{slackBotCommand}
	shellCommand := commandline.GenerateShellCommand(app.Commands)
	app.Commands = append(app.Commands, shellCommand)
	app.Action = shellCommand.Action
	err := app.Run(args)

	if err != nil {
		panic(err)
	}
}
