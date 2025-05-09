import { CHAINS } from '@synapsecns/synapse-constants'

const CHAINS_BY_ID = CHAINS.CHAINS_BY_ID

export const BASE_PATH = '/'
export const ANALYTICS_PATH = 'https://analytics.synapseprotocol.com/'
export const AIRDROP_PATH = '/claim'
export const SWAP_PATH = 'https://synapseprotocol.com/swap'
export const STAKE_PATH = 'https://synapseprotocol.com/stake'
export const INTERCHAIN_PATH = 'https://interchain.synapseprotocol.com/'
export const POOLS_PATH = 'https://synapseprotocol.com/pools'
export const BRIDGE_PATH =
  'https://synapseprotocol.com/?inputCurrency=USDC&outputCurrency=USDC&outputChain=10'
export const CONTRACTS_PATH = '/contracts'
export const PORTFOLIO_PATH = '/portfolio'
export const STATISTICS_PATH = '/statistics'
export const LANDING_PATH = 'https://synapseprotocol.com/landing'
export const SYNAPSE_PFP_PATH = '/returntomonke'
export const DOCS_URL = 'https://docs.synapseprotocol.com'
export const DISCORD_URL = 'https://discord.gg/synapseprotocol'
export const TELEGRAM_URL = 'https://t.me/synapseprotocol'
export const FORUM_URL = 'https://common.xyz/cortex-dao'
export const TWITTER_URL = 'https://twitter.com/SynapseProtocol'
export const GITHUB_URL = 'https://github.com/synapsecns'
export const SYNAPSE_DOCS_URL = 'https://docs.synapseprotocol.com'
export const MEDIUM_URL = 'https://synapseprotocol.medium.com/'
export const BUILD_ON_URL =
  'https://docs.synapseprotocol.com/synapse-interchain-network-sin/build-on-the-synapse-interchain-network'
export const MIRROR_URL = 'https://synapse.mirror.xyz/'

export const TERMS_OF_SERVICE_URL =
  'https://docs.google.com/document/d/1X5XjH23amj7ZbOLk0DICiHPQ7yyoZCWF/edit?usp=sharing&ouid=113997473479243481559&rtpof=true&sd=true'
export const PRIVACY_POLICY_URL =
  'https://docs.google.com/document/d/1X5XjH23amj7ZbOLk0DICiHPQ7yyoZCWF/edit?usp=sharing&ouid=113997473479243481559&rtpof=true&sd=true'

export const TERMS_OF_SERVICE_PATH = '/terms'
export const PRIVACY_POLICY_PATH = '/privacy'

export const ACCOUNTS_PATH = '/address'
export const TRANSACTIONS_PATH = '/txs'
export const TRANSACTION_PATH = '/tx'
export const TOKEN_ADDRESSES_PATH = '/token'
export const LEADERBOARD_PATH = '/leaderboard'
export const CHAINS_PATH = '/chain'

export const getTokenAddressUrl = ({ tokenAddress, chainId }) => {
  return `${TOKEN_ADDRESSES_PATH}/${tokenAddress}?chainId=${chainId}`
}

export const getChainUrl = ({ chainId }) => {
  return `${CHAINS_PATH}/${chainId}`
}

export const getBridgeTransactionUrl = ({ hash, chainIdFrom, chainIdTo }) => {
  let url = TRANSACTION_PATH

  if (hash) {
    url += `/${hash}`
  }
  url += '?'

  if (chainIdFrom) {
    url += `chainIdFrom=${chainIdFrom}`
  }

  if (chainIdTo) {
    if (url[url.length - 1] !== '?') {
      url += '&'
    }
    url += `chainIdTo=${chainIdTo}`
  }

  return url
}
export const getAddressesUrl = ({
  address,
  chainIdFrom,
  chainIdTo,
}: {
  address?: string
  chainIdFrom?: string
  chainIdTo?: string
}): string => {
  let url = ACCOUNTS_PATH

  if (address) {
    url += `/${address}`
  }
  url += '?'

  if (chainIdFrom) {
    url += `chainIdFrom=${chainIdFrom}`
  }

  if (chainIdTo) {
    if (url[url.length - 1] !== '?') {
      url += '&'
    }
    url += `chainIdTo=${chainIdTo}`
  }

  return url
}

export const getExplorerTxUrl = ({
  hash,
  data,
  chainId,
  type = 'tx',
}: {
  hash?: string
  data?: string
  chainId: string
  type?: string
}): string => {
  const baseUrl = CHAINS_BY_ID[chainId].explorerUrl

  return `${baseUrl}/${type}/${hash ?? data}`
}

export const getExplorerAddressUrl = ({
  address,
  data,
  chainId,
  type = 'address',
}) => {
  const baseUrl = CHAINS_BY_ID[chainId].explorerUrl

  return `${baseUrl}/${type}/${address ?? data}`
}
