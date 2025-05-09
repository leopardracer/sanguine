export enum SupportedChainId {
  ETH = 1,
  OPTIMISM = 10,
  CRONOS = 25,
  BSC = 56,
  UNICHAIN = 130,
  POLYGON = 137,
  FANTOM = 250,
  BOBA = 288,
  WORLDCHAIN = 480,
  HYPEREVM = 999,
  METIS = 1088,
  MOONBEAM = 1284,
  MOONRIVER = 1285,
  DOGECHAIN = 2000,
  CANTO = 7700,
  KLAYTN = 8217,
  BASE = 8453,
  ARBITRUM = 42161,
  AVALANCHE = 43114,
  DFK = 53935,
  LINEA = 59144,
  BERACHAIN = 80094,
  BLAST = 81457,
  SCROLL = 534352,
  AURORA = 1313161554,
  HARMONY = 1666600000,
}

/**
 * List of chain ids where SynapseBridge is not deployed
 */
const UNSUPPORTED_BRIDGE_CHAIN_IDS: number[] = [
  SupportedChainId.LINEA,
  SupportedChainId.SCROLL,
  SupportedChainId.WORLDCHAIN,
  SupportedChainId.UNICHAIN,
  SupportedChainId.BERACHAIN,
  SupportedChainId.HYPEREVM,
]

/**
 * List of paused chain IDs
 */
export const PAUSED_CHAIN_IDS: SupportedChainId[] = [
  SupportedChainId.BOBA,
  SupportedChainId.HARMONY,
  SupportedChainId.MOONBEAM,
  SupportedChainId.MOONRIVER,
  SupportedChainId.AURORA,
  SupportedChainId.CRONOS,
]

/**
 * List of supported chain ids, where SynapseBridge is deployed.
 */
export const SUPPORTED_CHAIN_IDS: number[] = Object.values(SupportedChainId)
  .map((chainId) => Number(chainId))
  .filter((chainId) => !isNaN(chainId))
  .filter((chainId) => !UNSUPPORTED_BRIDGE_CHAIN_IDS.includes(chainId))
  .filter((chainId) => !PAUSED_CHAIN_IDS.includes(chainId))

/**
 * List of chain ids where SynapseCCTP is deployed, ordered by CCTP's domain:
 * https://developers.circle.com/stablecoin/docs/cctp-protocol-contract#mainnet-contract-addresses
 *
 * Note: This is a subset of SUPPORTED_CHAIN_IDS.
 */
export const CCTP_SUPPORTED_CHAIN_IDS: number[] = [
  SupportedChainId.ETH,
  SupportedChainId.AVALANCHE,
  SupportedChainId.OPTIMISM,
  SupportedChainId.ARBITRUM,
  SupportedChainId.BASE,
  SupportedChainId.POLYGON, // Circle domain 7
].filter((chainId) => !PAUSED_CHAIN_IDS.includes(chainId))

/**
 * List of chain ids where gas.zip is deployed, ordered lexicographically
 */
export const GASZIP_SUPPORTED_CHAIN_IDS: number[] = [
  SupportedChainId.AVALANCHE,
  SupportedChainId.ARBITRUM,
  SupportedChainId.BASE,
  SupportedChainId.BERACHAIN,
  SupportedChainId.BLAST,
  SupportedChainId.BSC,
  SupportedChainId.ETH,
  SupportedChainId.HYPEREVM,
  SupportedChainId.LINEA,
  SupportedChainId.OPTIMISM,
  SupportedChainId.POLYGON,
  SupportedChainId.SCROLL,
  SupportedChainId.UNICHAIN,
  SupportedChainId.WORLDCHAIN,
].filter((chainId) => !PAUSED_CHAIN_IDS.includes(chainId))

/**
 * List of chain ids where FastBridge (RFQ) is deployed, ordered by chain id
 *
 */
export const RFQ_SUPPORTED_CHAIN_IDS: number[] = [
  SupportedChainId.ETH,
  SupportedChainId.OPTIMISM,
  SupportedChainId.BSC,
  SupportedChainId.WORLDCHAIN,
  SupportedChainId.BASE,
  SupportedChainId.ARBITRUM,
  SupportedChainId.LINEA,
  SupportedChainId.BLAST,
  SupportedChainId.SCROLL,
  SupportedChainId.UNICHAIN,
  SupportedChainId.BERACHAIN,
  SupportedChainId.HYPEREVM,
].filter((chainId) => !PAUSED_CHAIN_IDS.includes(chainId))

/**
 * List of chain ids where SynapseIntentRouter is deployed, ordered lexicographically.
 * Note: this is currently serving as an entry point for swaps between arbitrary tokens,
 * but will also support bridge modules in the future.
 */
export const INTENTS_SUPPORTED_CHAIN_IDS: number[] = [
  SupportedChainId.AVALANCHE,
  SupportedChainId.ARBITRUM,
  SupportedChainId.BASE,
  SupportedChainId.BERACHAIN,
  SupportedChainId.BLAST,
  SupportedChainId.BSC,
  SupportedChainId.ETH,
  SupportedChainId.HYPEREVM,
  SupportedChainId.LINEA,
  SupportedChainId.OPTIMISM,
  SupportedChainId.POLYGON,
  SupportedChainId.SCROLL,
  SupportedChainId.UNICHAIN,
  SupportedChainId.WORLDCHAIN,
].filter((chainId) => !PAUSED_CHAIN_IDS.includes(chainId))

/**
 * List of chain ids where hydrating on constructor is supported , ordered by monke
 *
 * Note: This is a subset of SUPPORTED_CHAIN_IDS.
 */
export const HYDRATION_SUPPORTED_CHAIN_IDS: number[] = [
  SupportedChainId.ETH,
  SupportedChainId.AVALANCHE,
  SupportedChainId.OPTIMISM,
  SupportedChainId.ARBITRUM,
  SupportedChainId.BASE,
  SupportedChainId.BSC,
]

export const isChainIdSupported = (
  chainId: number
): chainId is SupportedChainId =>
  Object.values(SupportedChainId).includes(chainId) &&
  !PAUSED_CHAIN_IDS.includes(chainId)

export const areIntentsSupported = (
  chainId: number
): chainId is SupportedChainId => INTENTS_SUPPORTED_CHAIN_IDS.includes(chainId)
