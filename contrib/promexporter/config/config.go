// Package config contains the config for the prom exporter.
package config

import (
	"fmt"
	"os"
	"path/filepath"

	"github.com/creasty/defaults"
	"github.com/jftuga/ellipsis"
	"github.com/synapsecns/sanguine/contrib/promexporter/internal/types"
	"gopkg.in/yaml.v2"
)

type Config struct {
	// Port is the port of the config
	Port int `yaml:"port"`
	// SubmitterChecks is the list of gas checks
	SubmitterChecks []SubmitterChecks `yaml:"gas_checks"`
	// OmniRpcURL is the url of the omnirpc
	OmnirpcURL string `default:"https://rpc.omnirpc.io" yaml:"omnirpc_url"`
	// VpriceCheckTokens is the list of tokens to check vprice for
	VpriceCheckTokens []string `yaml:"vprice_tokens"`
	// RFQAPIURL is the url of the RFQ API
	RFQAPIUrl string `default:"http://rfq-api.omnirpc.io/quotes" yaml:"rfq_api_url"`
	// map chainid->address
	BridgeChecks map[int]string
	// BridgeConfig is the config for the bridge.
	BridgeConfig BridgeConfig
	// BatchCallLimit is the limit of batch calls
	BatchCallLimit int
}

// BridgeConfig contains the config for the bridge.
type BridgeConfig struct {
	ChainID int    `yaml:"chain_id"`
	Address string `yaml:"address"`
}

// SubmitterChecks contains the config for the gas checks.
type SubmitterChecks struct {
	// ChainID is the chain id
	ChainIDs []int `yaml:"chain_ids"`
	// Address is the address of the contract
	Address string `yaml:"address"`
	// Name of the address entity
	Name string `yaml:"name"`
}

// DecodeConfig decodes the config from the given file path.
func DecodeConfig(filePath string) (_ Config, err error) {
	cfg := &Config{}
	input, err := os.ReadFile(filepath.Clean(filePath))
	if err != nil {
		return Config{}, fmt.Errorf("failed to read file: %w", err)
	}

	// set some defaults
	if err := defaults.Set(cfg); err != nil {
		panic(err)
	}

	cfg.Port = 9000

	// set some other defaults that can't be set w/ default

	// note: when you want to add bridges, you can use the router to look up bridge addresses
	// and get the gas limit from there
	cfg.SubmitterChecks = []SubmitterChecks{
		{
			Address: "0x230a1ac45690b9ae1176389434610b9526d2f21b",
			ChainIDs: types.ToInts(types.ETH, types.OPTIMISM, types.CRONOS, types.BSC, types.POLYGON, types.FANTOM, types.BOBA,
				types.METIS, types.MOONBEAM, types.MOONRIVER, types.DOGECHAIN, types.CANTO, types.KLAYTN,
				types.BASE, types.ARBITRUM, types.AVALANCHE, types.DFK, types.AURORA, types.HARMONY, types.BLAST),
			Name: "validators",
		},
		{
			Address:  "0x49357ba0ef3a8dac25903472eee45c41221d4f9a",
			Name:     "cctp",
			ChainIDs: types.ToInts(types.ETH, types.ARBITRUM, types.AVALANCHE, types.OPTIMISM),
		},
		{
			Address:  "0xdd50676f81f607fd8ba7ed3187ddf172db174cd3",
			Name:     "rfq",
			ChainIDs: types.ToInts(types.OPTIMISM, types.ARBITRUM, types.ETH),
		},
		{
			Address:  "0xdc927bd56cf9dfc2e3779c7e3d6d28da1c219969",
			Name:     "rfq2",
			ChainIDs: types.ToInts(types.OPTIMISM, types.ARBITRUM, types.ETH),
		},
	}

	cfg.BridgeChecks = map[int]string{
		types.ETH.Int():       "0x2796317b0fF8538F253012862c06787Adfb8cEb6",
		types.OPTIMISM.Int():  "0xAf41a65F786339e7911F4acDAD6BD49426F2Dc6b",
		types.CRONOS.Int():    "0xE27BFf97CE92C3e1Ff7AA9f86781FDd6D48F5eE9",
		types.BSC.Int():       "0xd123f70AE324d34A9E76b67a27bf77593bA8749f",
		types.POLYGON.Int():   "0x8F5BBB2BB8c2Ee94639E55d5F41de9b4839C1280",
		types.FANTOM.Int():    "0xAf41a65F786339e7911F4acDAD6BD49426F2Dc6b",
		types.BOBA.Int():      "0x432036208d2717394d2614d6697c46DF3Ed69540",
		types.METIS.Int():     "0x06Fea8513FF03a0d3f61324da709D4cf06F42A5c",
		types.MOONBEAM.Int():  "0x84A420459cd31C3c34583F67E0f0fB191067D32f",
		types.MOONRIVER.Int(): "0xaeD5b25BE1c3163c907a471082640450F928DDFE",
		types.KLAYTN.Int():    "0xAf41a65F786339e7911F4acDAD6BD49426F2Dc6b",
		types.ARBITRUM.Int():  "0x6F4e8eBa4D337f874Ab57478AcC2Cb5BACdc19c9",
		types.AVALANCHE.Int(): "0xC05e61d0E7a63D27546389B7aD62FdFf5A91aACE",
		types.DFK.Int():       "0xE05c976d3f045D0E6E7A6f61083d98A15603cF6A",
		types.AURORA.Int():    "0xaeD5b25BE1c3163c907a471082640450F928DDFE",
		types.HARMONY.Int():   "0xAf41a65F786339e7911F4acDAD6BD49426F2Dc6b",
		types.CANTO.Int():     "0xDde5BEC4815E1CeCf336fb973Ca578e8D83606E0",
		types.DOGECHAIN.Int(): "0x9508BF380c1e6f751D97604732eF1Bae6673f299",
		types.BASE.Int():      "0xf07d1C752fAb503E47FEF309bf14fbDD3E867089",
		types.BLAST.Int():     "0x55769bAF6ec39B3bf4aAE948eB890eA33307Ef3C",
	}

	cfg.VpriceCheckTokens = []string{"nUSD", "nETH"}

	cfg.BridgeConfig = BridgeConfig{
		ChainID: types.ETH.Int(),
		Address: "0x5217c83ca75559b1f8a8803824e5b7ac233a12a1",
	}

	cfg.BatchCallLimit = 45

	err = yaml.Unmarshal(input, cfg)
	if err != nil {
		return Config{}, fmt.Errorf("could not unmarshall config %s: %w", ellipsis.Shorten(string(input), 30), err)
	}
	return *cfg, nil
}
