import { Token } from '../../types'
import * as CHAINS from '../chains/master'

const zeroAddress = '0x0000000000000000000000000000000000000000'
const nullAddress = '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'

export const GOHM = new Token({
  addresses: {
    [CHAINS.ETH.id]: '0x0ab87046fBb341D058F17CBC4c1133F25a20a52f',
    [CHAINS.OPTIMISM.id]: '0x0b5740c6b4a97f90eF2F0220651Cca420B868FfB',
    [CHAINS.BNB.id]: '0x88918495892BAF4536611E38E75D771Dc6Ec0863',
    [CHAINS.POLYGON.id]: '0xd8cA34fd379d9ca3C6Ee3b3905678320F5b45195',
    [CHAINS.FANTOM.id]: '0x91fa20244Fb509e8289CA630E5db3E9166233FDc',
    [CHAINS.ARBITRUM.id]: '0x8D9bA570D6cb60C7e3e0F31343Efe75AB8E65FB1',
    [CHAINS.AVALANCHE.id]: '0x321E7092a180BB43555132ec53AaA65a5bF84251',
    [CHAINS.MOONRIVER.id]: '0x3bF21Ce864e58731B6f28D68d5928BcBEb0Ad172',
    [CHAINS.BOBA.id]: '0xd22C0a4Af486C7FA08e282E9eB5f30F9AaA62C95',
    [CHAINS.HARMONY.id]: '0x67C10C397dD0Ba417329543c1a40eb48AAa7cd00',
    [CHAINS.MOONBEAM.id]: '0xD2666441443DAa61492FFe0F37717578714a4521',
    [CHAINS.CRONOS.id]: '0xbB0A63A6CA2071c6C4bcAC11a1A317b20E3E999C',
    [CHAINS.METIS.id]: '0xFB21B70922B9f6e3C6274BcD6CB1aa8A0fe20B80',
  },
  decimals: 18,
  symbol: 'gOHM',
  name: 'Olympus DAO',
  logo: 'https://8f3ea9f2.sanguine-fe.pages.dev/_next/static/media/ohm.1b779b45.svg',
  swapableType: 'OHM',
  color: 'gray',
  visibilityRank: 40,
  priorityRank: 6,
  routeSymbol: 'gOHM',
  coingeckoId: 'governance-ohm',
})

export const LINK = new Token({
  addresses: {
    [CHAINS.ETH.id]: '0x514910771af9ca656af840dff83e8264ecf986ca',
    [CHAINS.KLAYTN.id]: '0xfbed1abb3ad0f8c467068de9fde905887e8c9118',
  },
  decimals: 18,
  symbol: 'LINK',
  name: 'ChainLink Token',
  logo: 'https://8f3ea9f2.sanguine-fe.pages.dev/_next/static/media/link.bdd944c9.svg',
  swapableType: 'LINK',
  color: 'blue',
  priorityRank: 6,
  routeSymbol: 'LINK',
  coingeckoId: 'chainlink',
})

export const HIGH = new Token({
  addresses: {
    [CHAINS.ETH.id]: '0x71Ab77b7dbB4fa7e017BC15090b2163221420282',
    [CHAINS.BNB.id]: '0x5f4bde007dc06b867f86ebfe4802e34a1ffeed63',
  },
  decimals: 18,
  symbol: 'HIGH',
  name: 'Highstreet',
  logo: 'https://8f3ea9f2.sanguine-fe.pages.dev/_next/static/media/highstreet.e8060cc0.svg',
  swapableType: 'HIGH',
  color: 'cyan',
  priorityRank: 6,
  routeSymbol: 'HIGH',
  coingeckoId: 'highstreet',
})

export const JUMP = new Token({
  addresses: {
    [CHAINS.BNB.id]: '0x130025ee738a66e691e6a7a62381cb33c6d9ae83',
    [CHAINS.FANTOM.id]: '0x78DE9326792ce1d6eCA0c978753c6953Cdeedd73',
    [CHAINS.METIS.id]: '0xE3c82A836Ec85311a433fBd9486EfAF4b1AFbF48',
  },
  decimals: 18,
  symbol: 'JUMP',
  name: 'HyperJump',
  logo: 'https://8f3ea9f2.sanguine-fe.pages.dev/_next/static/media/hyperjump.e48ce883.svg',
  docUrl: '',
  swapableType: 'JUMP',
  color: 'cyan',
  priorityRank: 6,
  routeSymbol: 'JUMP',
})

export const SFI = new Token({
  addresses: {
    [CHAINS.ETH.id]: '0xb753428af26e81097e7fd17f40c88aaa3e04902c',
    [CHAINS.AVALANCHE.id]: '0xc2Bf0A1f7D8Da50D608bc96CF701110d4A438312',
  },
  decimals: 18,
  symbol: 'SFI',
  name: 'Saffron Finance',
  logo: 'https://8f3ea9f2.sanguine-fe.pages.dev/_next/static/media/sfi.4e35fbac.svg',
  docUrl: '',
  swapableType: 'SFI',
  color: 'red',
  priorityRank: 6,
  routeSymbol: 'SFI',
  coingeckoId: 'saffron-finance',
})

export const DOG = new Token({
  addresses: {
    [CHAINS.ETH.id]: '0xBAac2B4491727D78D2b78815144570b9f2Fe8899',
    [CHAINS.BNB.id]: '0xaa88c603d142c371ea0eac8756123c5805edee03',
    [CHAINS.POLYGON.id]: '0xeEe3371B89FC43Ea970E908536Fcddd975135D8a',
  },
  decimals: 18,
  symbol: 'DOG',
  name: 'The Doge NFT',
  logo: 'https://8f3ea9f2.sanguine-fe.pages.dev/_next/static/media/dog.b3513f9b.svg',
  docUrl: '',
  swapableType: 'DOG',
  color: 'yellow',
  priorityRank: 6,
  routeSymbol: 'DOG',
  coingeckoId: 'the-doge-nft',
})

export const NFD = new Token({
  addresses: {
    [CHAINS.BNB.id]: '0x0fe9778c005a5a6115cbe12b0568a2d50b765a51',
    [CHAINS.AVALANCHE.id]: '0xf1293574ee43950e7a8c9f1005ff097a9a713959',
    [CHAINS.DOGE.id]: '0x868055ADFA27D331d5b69b1BF3469aDAAc3ba7f2',
    [CHAINS.POLYGON.id]: '0x0a5926027d407222f8fe20f24cb16e103f617046',
  },
  decimals: 18,
  symbol: 'NFD',
  name: 'Feisty Doge',
  logo: 'https://8f3ea9f2.sanguine-fe.pages.dev/_next/static/media/nfd.1212b18d.svg',
  docUrl: '',
  swapableType: 'NFD',
  color: 'yellow',
  priorityRank: 6,
  routeSymbol: 'NFD',
  coingeckoId: 'feisty-doge-nft',
})

export const SOLAR = new Token({
  addresses: {
    [CHAINS.MOONBEAM.id]: '0x0DB6729C03C85B0708166cA92801BcB5CAc781fC',
    [CHAINS.MOONRIVER.id]: '0x76906411D07815491A5E577022757aD941fb5066',
  },
  decimals: 18,
  symbol: 'veSOLAR',
  name: 'Vested SolarBeam',
  logo: 'https://8f3ea9f2.sanguine-fe.pages.dev/_next/static/media/solar.add1885e.svg',
  docUrl: '',
  swapableType: 'SOLAR',
  color: 'orange',
  priorityRank: 6,
  routeSymbol: 'veSOLAR',
})

export const GMX = new Token({
  addresses: {
    [CHAINS.ARBITRUM.id]: '0xfc5a1a6eb076a2c7ad06ed22c90d7e710e35ad0a',
    [CHAINS.AVALANCHE.id]: '0x62edc0692bd897d2295872a9ffcac5425011c661',
  },
  wrapperAddresses: {
    [CHAINS.AVALANCHE.id]: '0x20A9DC684B4d0407EF8C9A302BEAaA18ee15F656',
  },
  decimals: 18,
  symbol: 'GMX',
  name: 'GMX',
  logo: 'https://8f3ea9f2.sanguine-fe.pages.dev/_next/static/media/gmx.0e372310.svg',
  docUrl: '',
  swapableType: 'GMX',
  priorityRank: 6,
  color: 'blue',
  routeSymbol: 'GMX',
  coingeckoId: 'gmx',
})

export const SDT = new Token({
  addresses: {
    [CHAINS.ETH.id]: '0x73968b9a57c6e53d41345fd57a6e6ae27d6cdb2f',
    [CHAINS.AVALANCHE.id]: '0xCCBf7c451F81752F7d2237F2c18C371E6e089E69',
    [CHAINS.ARBITRUM.id]: '0x087d18A77465c34CDFd3a081a2504b7E86CE4EF8',
    [CHAINS.FANTOM.id]: '0xE3c82A836Ec85311a433fBd9486EfAF4b1AFbF48',
    [CHAINS.HARMONY.id]: '0xE3c82A836Ec85311a433fBd9486EfAF4b1AFbF48',
  },
  decimals: 18,
  symbol: 'SDT',
  name: 'Stake DAO',
  logo: 'https://8f3ea9f2.sanguine-fe.pages.dev/_next/static/media/sdt.c37b0b67.svg',
  docUrl: '',
  swapableType: 'SDT',
  color: 'gray',
  priorityRank: 6,
  routeSymbol: 'SDT',
  coingeckoId: 'stake-dao',
})

export const NEWO = new Token({
  addresses: {
    [CHAINS.ETH.id]: '0x98585dFc8d9e7D48F0b1aE47ce33332CF4237D96',
    [CHAINS.AVALANCHE.id]: '0x4Bfc90322dD638F81F034517359BD447f8E0235a',
    [CHAINS.ARBITRUM.id]: '0x0877154a755B24D499B8e2bD7ecD54d3c92BA433',
  },
  decimals: 18,
  symbol: 'NEWO',
  name: 'New Order',
  logo: 'https://8f3ea9f2.sanguine-fe.pages.dev/_next/static/media/newo.3c9ae85e.svg',
  docUrl: '',
  swapableType: 'NEWO',
  color: 'yellow',
  priorityRank: 6,
  routeSymbol: 'NEWO',
  coingeckoId: 'new-order',
})

export const PEPE = new Token({
  addresses: {
    [CHAINS.ETH.id]: '0x6982508145454ce325ddbe47a25d4ec3d2311933',
    [CHAINS.ARBITRUM.id]: '0xA54B8e178A49F8e5405A4d44Bb31F496e5564A05',
  },
  decimals: 18,
  symbol: 'PEPE',
  name: 'Pepe',
  logo: 'https://8f3ea9f2.sanguine-fe.pages.dev/_next/static/media/pepe.5da81140.svg',
  swapableType: 'PEPE',
  priorityRank: 6,
  routeSymbol: 'PEPE',
  color: 'green',
  coingeckoId: 'pepe',
})

export const VSTA = new Token({
  addresses: {
    [CHAINS.ETH.id]: '0xA8d7F5e7C78ed0Fa097Cc5Ec66C1DC3104c9bbeb',
    [CHAINS.ARBITRUM.id]: '0xa684cd057951541187f288294a1e1c2646aa2d24',
  },
  decimals: 18,
  symbol: 'VSTA',
  name: 'Vesta',
  logo: 'https://8f3ea9f2.sanguine-fe.pages.dev/_next/static/media/vsta.56aa9f41.svg',
  docUrl: '',
  swapableType: 'VSTA',
  color: 'gray',
  priorityRank: 6,
  routeSymbol: 'VSTA',
  coingeckoId: 'vesta-finance',
})

export const H2O = new Token({
  addresses: {
    [CHAINS.ETH.id]: '0x0642026e7f0b6ccac5925b4e7fa61384250e1701',
    [CHAINS.ARBITRUM.id]: '0xD1c6f989e9552DB523aBAE2378227fBb059a3976',
    [CHAINS.AVALANCHE.id]: '0xC6b11a4Fd833d1117E9D312c02865647cd961107',
    [CHAINS.BNB.id]: '0x03eFca7CEb108734D3777684F3C0A0d8ad652f79',
    [CHAINS.MOONBEAM.id]: '0xA46aDF6D5881ca0b8596EDadF8f058F8c16d8B68',
    [CHAINS.MOONRIVER.id]: '0x9c0a820bb01e2807aCcd1c682d359e92DDd41403',
    [CHAINS.OPTIMISM.id]: '0xE3c82A836Ec85311a433fBd9486EfAF4b1AFbF48',
    [CHAINS.POLYGON.id]: '0x32ba7cF7d681357529013de6a2CDF93933C0dF3f',
  },
  decimals: 18,
  symbol: 'H2O',
  name: 'H2O',
  logo: 'https://8f3ea9f2.sanguine-fe.pages.dev/_next/static/media/h2o.108c0951.svg',
  docUrl: '',
  swapableType: 'H2O',
  color: 'cyan',
  priorityRank: 6,
  routeSymbol: 'H2O',
  coingeckoId: 'h2o',
})

export const L2DAO = new Token({
  addresses: {
    [CHAINS.ARBITRUM.id]: '0x2CaB3abfC1670D1a452dF502e216a66883cDf079',
    [CHAINS.OPTIMISM.id]: '0xd52f94DF742a6F4B4C8b033369fE13A41782Bf44',
  },
  decimals: 18,
  symbol: 'L2DAO',
  name: 'Layer2DAO',
  logo: 'https://8f3ea9f2.sanguine-fe.pages.dev/_next/static/media/l2dao.0d1dd411.svg',
  docUrl: '',
  swapableType: 'L2DAO',
  color: 'cyan',
  priorityRank: 6,
  routeSymbol: 'L2DAO',
  coingeckoId: 'layer2dao',
})

export const PLS = new Token({
  addresses: {
    [CHAINS.ARBITRUM.id]: '0x51318b7d00db7acc4026c88c3952b66278b6a67f',
    [CHAINS.OPTIMISM.id]: '0xD9eAA386cCD65F30b77FF175F6b52115FE454fD6',
  },
  decimals: 18,
  symbol: 'PLS',
  name: 'Plutus',
  logo: 'https://8f3ea9f2.sanguine-fe.pages.dev/_next/static/media/pls.a97f40f2.svg',
  docUrl: '',
  swapableType: 'PLS',
  color: 'green',
  priorityRank: 6,
  routeSymbol: 'PLS',
  coingeckoId: 'plutusdao',
})

export const AGEUR = new Token({
  addresses: {
    [CHAINS.ETH.id]: '0x1a7e4e63778B4f12a199C062f3eFdD288afCBce8',
    [CHAINS.ARBITRUM.id]: '0x16BFc5fe024980124bEf51d1D792dC539d1B5Bf0',
    [CHAINS.OPTIMISM.id]: '0xa0554607e477cdC9d0EE2A6b087F4b2DC2815C22',
  },
  decimals: 18,
  symbol: 'agEUR',
  name: 'Angle Euro',
  logo: 'https://45a97b3d.sanguine-fe.pages.dev/_next/static/media/ageur.588833db.svg',
  docUrl: '',
  swapableType: 'AGEUR',
  color: 'yellow',
  priorityRank: 6,
  routeSymbol: 'agEUR',
  coingeckoId: 'ageur',
})

export const UNIDX = new Token({
  addresses: {
    [CHAINS.ETH.id]: '0xf0655dcee37e5c0b70fffd70d85f88f8edf0aff6',
    [CHAINS.ARBITRUM.id]: '0x5429706887FCb58a595677B73E9B0441C25d993D',
    [CHAINS.FANTOM.id]: '0x0483a76D80D0aFEC6bd2afd12C1AD865b9DF1471',
    [CHAINS.OPTIMISM.id]: '0x28b42698Caf46B4B012CF38b6C75867E0762186D',
    [CHAINS.BASE.id]: '0x6B4712AE9797C199edd44F897cA09BC57628a1CF',
  },
  decimals: 18,
  symbol: 'UNIDX',
  name: 'Unidex',
  logo: 'https://8f3ea9f2.sanguine-fe.pages.dev/_next/static/media/unidex.29d556df.svg',
  docUrl: '',
  swapableType: 'UNIDX',
  color: 'gray',
  priorityRank: 6,
  routeSymbol: 'UNIDX',
  coingeckoId: 'unidex',
})

export const BUSD = new Token({
  addresses: {
    [CHAINS.BNB.id]: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    [CHAINS.DOGE.id]: '0x1555C68Be3b22cdcCa934Ae88Cb929Db40aB311d',
  },
  decimals: 18,
  symbol: 'BUSD',
  name: 'Binance USD',
  logo: 'https://8f3ea9f2.sanguine-fe.pages.dev/_next/static/media/busd.e8bb5032.svg',
  swapableType: 'BUSD',
  swapableOn: [CHAINS.BNB.id],
  color: 'yellow',
  priorityRank: 2,
  routeSymbol: 'BUSD',
  coingeckoId: 'binance-usd',
})

export const USDC = new Token({
  visibilityRank: 101,
  addresses: {
    [CHAINS.ETH.id]: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    [CHAINS.OPTIMISM.id]: '0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85',
    [CHAINS.CRONOS.id]: '0xc21223249ca28397b4b6541dffaecc539bff0c59',
    [CHAINS.BNB.id]: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
    [CHAINS.BOBA.id]: '0x66a2A913e447d6b4BF33EFbec43aAeF87890FBbc',
    [CHAINS.DOGE.id]: '0x85C2D3bEBffD83025910985389aB8aD655aBC946',
    [CHAINS.CANTO.id]: '0x80b5a32E4F032B2a058b4F29EC95EEfEEB87aDcd',
    [CHAINS.KLAYTN.id]: '0x6270B58BE569a7c0b8f47594F191631Ae5b2C86C',
    [CHAINS.ARBITRUM.id]: '0xaf88d065e77c8cc2239327c5edb3a432268e5831',
    [CHAINS.AVALANCHE.id]: '0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e',
    [CHAINS.DFK.id]: '0x3AD9DFE640E1A9Cc1D9B0948620820D975c3803a',
    [CHAINS.BASE.id]: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
    [CHAINS.POLYGON.id]: '0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359',
    [CHAINS.SCROLL.id]: '0x06eFdBFf2a14a7c8E15944D1F4A48F9F95F663A4',
    [CHAINS.LINEA.id]: '0x176211869cA2b568f2A7D4EE941E073a821EE1ff',
    [CHAINS.UNICHAIN.id]: '0x078d782b760474a361dda0af3839290b0ef57ad6',
  },
  decimals: {
    [CHAINS.ETH.id]: 6,
    [CHAINS.OPTIMISM.id]: 6,
    [CHAINS.CRONOS.id]: 6,
    [CHAINS.BNB.id]: 18,
    [CHAINS.BOBA.id]: 6,
    [CHAINS.DOGE.id]: 6,
    [CHAINS.CANTO.id]: 6,
    [CHAINS.KLAYTN.id]: 6,
    [CHAINS.ARBITRUM.id]: 6,
    [CHAINS.AVALANCHE.id]: 6,
    [CHAINS.DFK.id]: 18,
    [CHAINS.BASE.id]: 6,
    [CHAINS.POLYGON.id]: 6,
    [CHAINS.SCROLL.id]: 6,
    [CHAINS.LINEA.id]: 6,
    [CHAINS.UNICHAIN.id]: 6,
  },
  swapExceptions: {
    [CHAINS.KLAYTN.id]: [CHAINS.ETH.id, CHAINS.DOGE.id],
    [CHAINS.DOGE.id]: [CHAINS.ETH.id, CHAINS.DOGE.id],
  },
  symbol: 'USDC',
  name: 'USD Coin',
  logo: 'https://8f3ea9f2.sanguine-fe.pages.dev/_next/static/media/usdc.d5dcb030.svg',
  swapableType: 'USD',
  swapableOn: [
    CHAINS.BNB.id,
    CHAINS.ETH.id,
    CHAINS.POLYGON.id,
    CHAINS.ARBITRUM.id,
    CHAINS.AVALANCHE.id,
    CHAINS.HARMONY.id,
    CHAINS.AURORA.id,
    CHAINS.BOBA.id,
    CHAINS.OPTIMISM.id,
    CHAINS.METIS.id,
    CHAINS.CRONOS.id,
    CHAINS.CANTO.id,
  ],
  color: 'blue',
  priorityRank: 1,
  routeSymbol: 'USDC',
  coingeckoId: 'usd-coin',
})

export const METISUSDC = new Token({
  visibilityRank: 101,
  addresses: {
    [CHAINS.METIS.id]: '0xEA32A96608495e54156Ae48931A7c20f0dcc1a21',
  },
  decimals: {
    [CHAINS.METIS.id]: 6,
  },
  symbol: 'm.USDC',
  name: 'Metis USD Coin',
  logo: 'https://8f3ea9f2.sanguine-fe.pages.dev/_next/static/media/usdc.d5dcb030.svg',
  swapableType: 'USD',
  swapableOn: [CHAINS.METIS.id],
  color: 'blue',
  priorityRank: 3,
  routeSymbol: 'm.USDC',
})

export const USDT = new Token({
  addresses: {
    [CHAINS.ETH.id]: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    [CHAINS.OPTIMISM.id]: '0x94b008aA00579c1307B0EF2c499aD98a8ce58e58',
    [CHAINS.BNB.id]: '0x55d398326f99059ff775485246999027b3197955',
    [CHAINS.POLYGON.id]: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
    [CHAINS.BOBA.id]: '0x5DE1677344D3Cb0D7D465c10b72A8f60699C062d',
    [CHAINS.DOGE.id]: '0x7f8e71DD5A7e445725F0EF94c7F01806299e877A',
    [CHAINS.CANTO.id]: '0xd567B3d7B8FE3C79a1AD8dA978812cfC4Fa05e75',
    [CHAINS.KLAYTN.id]: '0xd6dAb4CfF47dF175349e6e7eE2BF7c40Bb8C05A3',
    [CHAINS.ARBITRUM.id]: '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9',
    [CHAINS.AVALANCHE.id]: '0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7',
    [CHAINS.SCROLL.id]: '0xf55BEC9cafDbE8730f096Aa55dad6D22d44099Df',
  },
  swapExceptions: {
    [CHAINS.KLAYTN.id]: [CHAINS.ETH.id, CHAINS.DOGE.id],
    [CHAINS.DOGE.id]: [CHAINS.ETH.id, CHAINS.DOGE.id],
  },
  decimals: {
    [CHAINS.ETH.id]: 6,
    [CHAINS.OPTIMISM.id]: 6,
    [CHAINS.BNB.id]: 18,
    [CHAINS.POLYGON.id]: 6,
    [CHAINS.BOBA.id]: 6,
    [CHAINS.DOGE.id]: 6,
    [CHAINS.CANTO.id]: 6,
    [CHAINS.KLAYTN.id]: 6,
    [CHAINS.ARBITRUM.id]: 6,
    [CHAINS.AVALANCHE.id]: 6,
    [CHAINS.SCROLL.id]: 6,
  },
  symbol: 'USDT',
  name: 'USD Tether',
  logo: 'https://8f3ea9f2.sanguine-fe.pages.dev/_next/static/media/usdt.3c9cd2f8.svg',
  color: 'lime',
  swapableType: 'USD',
  swapableOn: [
    CHAINS.BNB.id,
    CHAINS.ETH.id,
    CHAINS.POLYGON.id,
    CHAINS.ARBITRUM.id,
    CHAINS.AVALANCHE.id,
    CHAINS.HARMONY.id,
    CHAINS.AURORA.id,
    CHAINS.BOBA.id,
    CHAINS.CANTO.id,
  ],
  visibilityRank: 100,
  priorityRank: 1,
  routeSymbol: 'USDT',
  coingeckoId: 'tether',
})

export const DAI = new Token({
  addresses: {
    [CHAINS.ETH.id]: '0x6b175474e89094c44da98b954eedeac495271d0f',
    [CHAINS.OPTIMISM.id]: '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
    [CHAINS.POLYGON.id]: '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063',
    [CHAINS.BOBA.id]: '0xf74195Bb8a5cf652411867c5C2C5b8C2a402be35',
    [CHAINS.DOGE.id]: '0xB3306f03595490e5cC3a1b1704a5a158D3436ffC',
    [CHAINS.KLAYTN.id]: '0x078dB7827a5531359f6CB63f62CFA20183c4F10c',
    [CHAINS.ARBITRUM.id]: '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
    [CHAINS.BASE.id]: '0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb',
  },
  swapExceptions: {
    [CHAINS.KLAYTN.id]: [CHAINS.ETH.id, CHAINS.DOGE.id],
    [CHAINS.DOGE.id]: [CHAINS.ETH.id, CHAINS.DOGE.id],
  },
  decimals: 18,
  symbol: 'DAI',
  name: 'Dai',
  logo: 'https://8f3ea9f2.sanguine-fe.pages.dev/_next/static/media/dai.ba6d3142.svg',
  swapableType: 'USD',
  swapableOn: [
    CHAINS.ETH.id,
    CHAINS.POLYGON.id,
    CHAINS.AVALANCHE.id,
    CHAINS.HARMONY.id,
    CHAINS.BOBA.id,
  ],
  color: 'yellow',
  visibilityRank: 100,
  priorityRank: 1,
  routeSymbol: 'DAI',
  coingeckoId: 'dai',
})

export const WBTC = new Token({
  addresses: {
    [CHAINS.ETH.id]: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
    [CHAINS.KLAYTN.id]: '0xDCbacF3f7a069922E677912998c8d57423C37dfA',
    [CHAINS.DOGE.id]: '0xD0c6179c43C00221915f1a61f8eC06A5Aa32F9EC',
  },
  decimals: {
    [CHAINS.ETH.id]: 8,
    [CHAINS.KLAYTN.id]: 8,
    [CHAINS.DOGE.id]: 8,
  },
  symbol: 'WBTC',
  name: 'Wrapped BTC',
  logo: 'https://8f3ea9f2.sanguine-fe.pages.dev/_next/static/media/wbtc.d5fa58cc.svg',
  swapableType: 'WBTC',
  color: 'orange',
  priorityRank: 3,
  routeSymbol: 'WBTC',
  coingeckoId: 'wrapped-bitcoin',
})

export const WETHE = new Token({
  addresses: {
    [CHAINS.AVALANCHE.id]: '0x49d5c2bdffac6ce2bfdb6640f4f80f226bc10bab',
  },
  decimals: 18,
  symbol: 'WETH.e',
  name: 'Wrapped ETH',
  logo: 'https://8f3ea9f2.sanguine-fe.pages.dev/_next/static/media/weth.19fa93ab.svg',
  swapableType: 'ETH',
  swapableOn: [CHAINS.AVALANCHE.id],
  color: 'sky',
  priorityRank: 2,
  routeSymbol: 'WETH.e',
})

export const ONEETH = new Token({
  addresses: {
    [CHAINS.HARMONY.id]: '0x6983d1e6def3690c4d616b13597a09e6193ea013',
  },
  decimals: 18,
  symbol: '1ETH',
  name: 'Harmony ETH',
  logo: 'https://8f3ea9f2.sanguine-fe.pages.dev/_next/static/media/weth.19fa93ab.svg',
  swapableType: 'ETH',
  swapableOn: [CHAINS.HARMONY.id],
  color: 'sky',
  priorityRank: 2,
  routeSymbol: '1ETH',
})

export const SYN = new Token({
  addresses: {
    [CHAINS.ETH.id]: '0x0f2d719407fdbeff09d87557abb7232601fd9f29',
    [CHAINS.BNB.id]: '0xa4080f1778e69467e905b8d6f72f6e441f9e9484',
    [CHAINS.POLYGON.id]: '0xf8f9efc0db77d8881500bb06ff5d6abc3070e695',
    [CHAINS.FANTOM.id]: '0xE55e19Fb4F2D85af758950957714292DAC1e25B2',
    [CHAINS.ARBITRUM.id]: '0x080f6aed32fc474dd5717105dba5ea57268f46eb',
    [CHAINS.AVALANCHE.id]: '0x1f1E7c893855525b303f99bDF5c3c05Be09ca251',
    [CHAINS.HARMONY.id]: '0xE55e19Fb4F2D85af758950957714292DAC1e25B2',
    [CHAINS.BOBA.id]: '0xb554A55358fF0382Fb21F0a478C3546d1106Be8c',
    [CHAINS.METIS.id]: '0x67C10C397dD0Ba417329543c1a40eb48AAa7cd00',
    [CHAINS.MOONRIVER.id]: '0xd80d8688b02B3FD3afb81cDb124F188BB5aD0445',
    [CHAINS.MOONBEAM.id]: '0xF44938b0125A6662f9536281aD2CD6c499F22004',
    [CHAINS.OPTIMISM.id]: '0x5A5fFf6F753d7C11A56A52FE47a177a87e431655',
    [CHAINS.CRONOS.id]: '0xFD0F80899983b8D46152aa1717D76cba71a31616',
    [CHAINS.AURORA.id]: '0xd80d8688b02B3FD3afb81cDb124F188BB5aD0445',
    [CHAINS.DOGE.id]: '0xDfA53EeBA61D69E1D2b56b36d78449368F0265c1',
    [CHAINS.CANTO.id]: '0x555982d2E211745b96736665e19D9308B615F78e',
    [CHAINS.BASE.id]: '0x432036208d2717394d2614d6697c46DF3Ed69540',
    [CHAINS.BLAST.id]: '0x9592f08387134e218327E6E8423400eb845EdE0E',
  },
  decimals: 18,
  symbol: 'SYN',
  name: 'Synapse',
  logo: 'https://8f3ea9f2.sanguine-fe.pages.dev/_next/static/media/syn.042f8cd0.svg',
  swapableType: 'SYN',
  color: 'purple',
  visibilityRank: 90,
  priorityRank: 2,
  routeSymbol: 'SYN',
  coingeckoId: 'synapse-2',
})

export const FRAX = new Token({
  addresses: {
    [CHAINS.ETH.id]: '0x853d955acef822db058eb8505911ed77f175b99e',
    [CHAINS.ARBITRUM.id]: '0x17FC002b466eEc40DaE837Fc4bE5c67993ddBd6F',
    [CHAINS.DOGE.id]: '0x10D70831f9C3c11c5fe683b2f1Be334503880DB6',
    [CHAINS.POLYGON.id]: '0x45c32fA6DF82ead1e2EF74d17b76547EDdFaFF89',
  },
  decimals: 18,
  symbol: 'FRAX',
  name: 'Frax',
  logo: 'https://8f3ea9f2.sanguine-fe.pages.dev/_next/static/media/frax.0f0670da.svg',
  swapableType: 'FRAX',
  color: 'gray',
  priorityRank: 6,
  routeSymbol: 'FRAX',
  coingeckoId: 'frax',
})

export const SYNFRAX = new Token({
  addresses: {
    [CHAINS.FANTOM.id]: '0x1852F70512298d56e9c8FDd905e02581E04ddb2a',
    [CHAINS.MOONRIVER.id]: '0xE96AC70907ffF3Efee79f502C985A7A21Bce407d',
    [CHAINS.MOONBEAM.id]: '0xDd47A348AB60c61Ad6B60cA8C31ea5e00eBfAB4F',
    [CHAINS.HARMONY.id]: '0x1852F70512298d56e9c8FDd905e02581E04ddb2a',
  },
  decimals: 18,
  symbol: 'synFRAX',
  name: 'Synapse Frax',
  logo: 'https://8f3ea9f2.sanguine-fe.pages.dev/_next/static/media/syn.042f8cd0.svg',
  swapableType: 'FRAX',
  color: 'gray',
  priorityRank: 4,
  routeSymbol: 'synFRAX',
})

export const NUSD = new Token({
  addresses: {
    [CHAINS.ETH.id]: '0x1B84765dE8B7566e4cEAF4D0fD3c5aF52D3DdE4F',
    [CHAINS.OPTIMISM.id]: '0x67C10C397dD0Ba417329543c1a40eb48AAa7cd00',
    [CHAINS.CRONOS.id]: '0x396c9c192dd323995346632581BEF92a31AC623b',
    [CHAINS.BNB.id]: '0x23b891e5c62e0955ae2bd185990103928ab817b3',
    [CHAINS.POLYGON.id]: '0xb6c473756050de474286bed418b77aeac39b02af',
    [CHAINS.FANTOM.id]: '0xED2a7edd7413021d440b09D654f3b87712abAB66',
    [CHAINS.BOBA.id]: '0x6B4712AE9797C199edd44F897cA09BC57628a1CF',
    [CHAINS.METIS.id]: '0x961318Fc85475E125B99Cc9215f62679aE5200aB',
    [CHAINS.CANTO.id]: '0xD8836aF2e565D3Befce7D906Af63ee45a57E8f80',
    [CHAINS.ARBITRUM.id]: '0x2913E812Cf0dcCA30FB28E6Cac3d2DCFF4497688',
    [CHAINS.AVALANCHE.id]: '0xCFc37A6AB183dd4aED08C204D1c2773c0b1BDf46',
    [CHAINS.HARMONY.id]: '0xED2a7edd7413021d440b09D654f3b87712abAB66',
    [CHAINS.AURORA.id]: '0x07379565cD8B0CaE7c60Dc78e7f601b34AF2A21c',
    [CHAINS.BLAST.id]: '0x3194B0A295D87fDAA54DF852c248F7a6BAF6c6e0',
  },
  decimals: 18,
  symbol: 'nUSD',
  name: 'Synapse nUSD',
  logo: 'https://8f3ea9f2.sanguine-fe.pages.dev/_next/static/media/nusd.c7a22fdb.svg',
  swapableType: 'USD',
  swapableOn: [
    CHAINS.BNB.id,
    CHAINS.POLYGON.id,
    CHAINS.FANTOM.id,
    CHAINS.ARBITRUM.id,
    CHAINS.AVALANCHE.id,
    CHAINS.HARMONY.id,
    CHAINS.AURORA.id,
    CHAINS.BOBA.id,
    CHAINS.OPTIMISM.id,
    CHAINS.METIS.id,
    CHAINS.CRONOS.id,
    CHAINS.CANTO.id,
  ],
  color: 'purple',
  visibilityRank: 50,
  priorityRank: 5,
  routeSymbol: 'nUSD',
  coingeckoId: 'usd-coin',
})

export const NOTE = new Token({
  addresses: {
    [CHAINS.CANTO.id]: '0x4e71a2e537b7f9d9413d3991d37958c0b5e1e503',
  },
  decimals: 18,
  symbol: 'NOTE',
  name: 'Canto Note',
  logo: 'https://8f3ea9f2.sanguine-fe.pages.dev/_next/static/media/note.d5246fbd.svg',
  swapableType: 'USD',
  swapableOn: [CHAINS.CANTO.id],
  color: 'green',
  visibilityRank: 90,
  priorityRank: 3,
  routeSymbol: 'NOTE',
  coingeckoId: 'note',
})

export const NETH = new Token({
  addresses: {
    [CHAINS.OPTIMISM.id]: '0x809DC529f07651bD43A172e8dB6f4a7a0d771036',
    [CHAINS.FANTOM.id]: '0x67C10C397dD0Ba417329543c1a40eb48AAa7cd00',
    [CHAINS.BOBA.id]: '0x96419929d7949D6A801A6909c145C8EEf6A40431',
    [CHAINS.METIS.id]: '0x931B8f17764362A3325D30681009f0eDd6211231',
    [CHAINS.CANTO.id]: '0x09fEC30669d63A13c666d2129230dD5588E2e240',
    [CHAINS.BASE.id]: '0xb554A55358fF0382Fb21F0a478C3546d1106Be8c',
    [CHAINS.ARBITRUM.id]: '0x3ea9B0ab55F34Fb188824Ee288CeaEfC63cf908e',
    [CHAINS.AVALANCHE.id]: '0x19E1ae0eE35c0404f835521146206595d37981ae',
    [CHAINS.HARMONY.id]: '0x0b5740c6b4a97f90eF2F0220651Cca420B868FfB',
    [CHAINS.BLAST.id]: '0xce971282fAAc9faBcF121944956da7142cccC855',
  },
  decimals: 18,
  symbol: 'nETH',
  name: 'Synapse nETH',
  logo: 'https://8f3ea9f2.sanguine-fe.pages.dev/_next/static/media/neth.7c854d0f.svg',
  swapableType: 'ETH',
  swapableOn: [
    CHAINS.OPTIMISM.id,
    CHAINS.BOBA.id,
    CHAINS.METIS.id,
    CHAINS.CANTO.id,
    CHAINS.BASE.id,
    CHAINS.ARBITRUM.id,
    CHAINS.AVALANCHE.id,
    CHAINS.HARMONY.id,
  ],
  color: 'purple',
  visibilityRank: 50,
  priorityRank: 5,
  routeSymbol: 'nETH',
  coingeckoId: 'ethereum',
})

export const ETH = new Token({
  addresses: {
    [CHAINS.ETH.id]: nullAddress,
    [CHAINS.OPTIMISM.id]: nullAddress,
    [CHAINS.BOBA.id]: zeroAddress,
    [CHAINS.CANTO.id]: '0x5FD55A1B9FC24967C4dB09C513C3BA0DFa7FF687',
    [CHAINS.BASE.id]: nullAddress,
    [CHAINS.ARBITRUM.id]: nullAddress,
    [CHAINS.DFK.id]: '0xfBDF0E31808d0aa7b9509AA6aBC9754E48C58852',
    [CHAINS.BLAST.id]: nullAddress,
    [CHAINS.SCROLL.id]: nullAddress,
    [CHAINS.LINEA.id]: nullAddress,
    [CHAINS.WORLDCHAIN.id]: nullAddress,
    [CHAINS.BNB.id]: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
    [CHAINS.UNICHAIN.id]: zeroAddress,
    [CHAINS.BERACHAIN.id]: '0x2F6F07CDcf3588944Bf4C42aC74ff24bF56e7590',
  },
  decimals: 18,
  symbol: 'ETH',
  name: 'Ethereum',
  logo: 'https://8f3ea9f2.sanguine-fe.pages.dev/_next/static/media/eth.b3692688.svg',
  isNative: true,
  swapableType: 'ETH',
  color: 'sky',
  visibilityRank: 101,
  priorityRank: 2,
  swapableOn: [
    CHAINS.ARBITRUM.id,
    CHAINS.BASE.id,
    CHAINS.BOBA.id,
    CHAINS.OPTIMISM.id,
    CHAINS.BLAST.id,
  ],
  routeSymbol: 'ETH',
  coingeckoId: 'ethereum',
})

export const MOVR = new Token({
  addresses: {
    [CHAINS.MOONBEAM.id]: '0x1d4C2a246311bB9f827F4C768e277FF5787B7D7E',
    [CHAINS.MOONRIVER.id]: zeroAddress,
  },
  decimals: 18,
  symbol: 'MOVR',
  name: 'MOVR',
  logo: 'https://adf1cceb.sanguine-fe.pages.dev/_next/static/media/movr.b86510af.svg',
  isNative: true,
  swapableType: 'MOVR',
  color: 'lime',
  priorityRank: 3,
  routeSymbol: 'MOVR',
  coingeckoId: 'moonriver',
})

export const AVAX = new Token({
  addresses: {
    [CHAINS.MOONBEAM.id]: '0xA1f8890E39b4d8E33efe296D698fe42Fb5e59cC3',
    [CHAINS.KLAYTN.id]: '0xCd8fE44A29Db9159dB36f96570d7A4d91986f528',
    [CHAINS.AVALANCHE.id]: zeroAddress,
    [CHAINS.DFK.id]: '0xB57B60DeBDB0b8172bb6316a9164bd3C695F133a',
    [CHAINS.HARMONY.id]: '0xb12c13e66AdE1F72f71834f2FC5082Db8C091358',
  },
  decimals: 18,
  symbol: 'AVAX',
  name: 'AVAX',
  logo: 'https://8f3ea9f2.sanguine-fe.pages.dev/_next/static/media/avax.9d53cbf0.svg',
  isNative: true,
  swapableType: 'AVAX',
  color: 'red',
  visibilityRank: 90,
  priorityRank: 3,
  routeSymbol: 'AVAX',
  coingeckoId: 'avalanche-2',
})

export const WMOVR = new Token({
  addresses: {
    [CHAINS.MOONRIVER.id]: '0x98878b06940ae243284ca214f92bb71a2b032b8a',
  },
  decimals: 18,
  symbol: 'MOVR',
  name: 'Wrapped MOVR',
  logo: 'https://adf1cceb.sanguine-fe.pages.dev/_next/static/media/movr.b86510af.svg',
  swapableType: 'MOVR',
  color: 'lime',
  priorityRank: 3,
  routeSymbol: 'WMOVR',
})

export const WAVAX = new Token({
  addresses: {
    [CHAINS.AVALANCHE.id]: '0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7',
  },
  decimals: 18,
  symbol: 'AVAX',
  name: 'Wrapped AVAX',
  logo: 'https://8f3ea9f2.sanguine-fe.pages.dev/_next/static/media/avax.9d53cbf0.svg',
  swapableType: 'AVAX',
  color: 'red',
  visibilityRank: 90,
  priorityRank: 3,
  routeSymbol: 'WAVAX',
})

export const JEWEL = new Token({
  addresses: {
    [CHAINS.DFK.id]: zeroAddress,
    [CHAINS.HARMONY.id]: '0x72cb10c6bfa5624dd07ef608027e366bd690048f',
    [CHAINS.KLAYTN.id]: '0x30C103f8f5A3A732DFe2dCE1Cc9446f545527b43',
    [CHAINS.AVALANCHE.id]: '0x997Ddaa07d716995DE90577C123Db411584E5E46',
    [CHAINS.METIS.id]: '0x17C09cfC96C865CF546d73365Cedb6dC66986963',
    [CHAINS.ETH.id]: '0x12f79f8c1A6e47a9b5F0796FDb008Bdc182fa19e',
  },
  decimals: 18,
  symbol: 'JEWEL',
  name: 'JEWEL',
  logo: 'https://8f3ea9f2.sanguine-fe.pages.dev/_next/static/media/jewel.b2e41862.svg',
  color: 'lime',
  isNative: true,
  swapableType: 'JEWEL',
  priorityRank: 3,
  routeSymbol: 'JEWEL',
  coingeckoId: 'defi-kingdoms',
})

export const WJEWEL = new Token({
  addresses: {
    [CHAINS.DFK.id]: '0xCCb93dABD71c8Dad03Fc4CE5559dC3D89F67a260',
  },
  decimals: 18,
  symbol: 'WJEWEL',
  name: 'Wrapped JEWEL',
  logo: 'https://8f3ea9f2.sanguine-fe.pages.dev/_next/static/media/jewel.b2e41862.svg',
  swapableType: 'JEWEL',
  swapableOn: [CHAINS.HARMONY.id],
  color: 'lime',
  priorityRank: 3,
  routeSymbol: 'WJEWEL',
})

export const SYNJEWEL = new Token({
  addresses: {
    [CHAINS.HARMONY.id]: '0x28b42698Caf46B4B012CF38b6C75867E0762186D',
  },
  decimals: 18,
  symbol: 'synJEWEL',
  name: 'synJEWEL',
  logo: 'https://8f3ea9f2.sanguine-fe.pages.dev/_next/static/media/jewel.b2e41862.svg',
  swapableType: 'JEWEL',
  swapableOn: [CHAINS.HARMONY.id],
  color: 'lime',
  priorityRank: 4,
  routeSymbol: 'synJEWEL',
})

export const XJEWEL = new Token({
  addresses: {
    [CHAINS.DFK.id]: '0x77f2656d04E158f915bC22f07B779D94c1DC47Ff',
    [CHAINS.HARMONY.id]: '0xA9cE83507D872C5e1273E745aBcfDa849DAA654F',
  },
  decimals: 18,
  symbol: 'xJEWEL',
  name: 'xJEWEL',
  logo: 'https://8f3ea9f2.sanguine-fe.pages.dev/_next/static/media/jewel.b2e41862.svg',
  swapableType: 'XJEWEL',
  color: 'lime',
  priorityRank: 3,
  routeSymbol: 'xJEWEL',
  coingeckoId: 'xjewel',
})

export const USDCe = new Token({
  addresses: {
    [CHAINS.OPTIMISM.id]: '0x7F5c764cBc14f9669B88837ca1490cCa17c31607',
    [CHAINS.AVALANCHE.id]: '0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664',
    [CHAINS.ARBITRUM.id]: '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8',
    [CHAINS.AURORA.id]: '0xB12BFcA5A55806AaF64E99521918A4bf0fC40802',
    [CHAINS.POLYGON.id]: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
    [CHAINS.WORLDCHAIN.id]: '0x79A02482A880bCE3F13e09Da970dC34db4CD24d1',
    [CHAINS.BERACHAIN.id]: '0x549943e04f40284185054145c6E4e9568C1D3241',
  },
  decimals: 6,
  symbol: 'USDC.e',
  name: 'Bridged USDC',
  logo: 'https://8f3ea9f2.sanguine-fe.pages.dev/_next/static/media/usdc.d5dcb030.svg',
  swapableType: 'USD',
  color: 'blue',
  swapableOn: [
    CHAINS.AVALANCHE.id,
    CHAINS.ARBITRUM.id,
    CHAINS.OPTIMISM.id,
    CHAINS.POLYGON.id,
  ],
  visibilityRank: 100,
  priorityRank: 1,
  routeSymbol: 'USDC.e',
})

export const USDTe = new Token({
  addresses: {
    [CHAINS.AVALANCHE.id]: '0xc7198437980c041c805a1edcba50c1ce5db95118',
    [CHAINS.AURORA.id]: '0x4988a896b1227218e4A686fdE5EabdcAbd91571f',
  },
  decimals: 6,
  symbol: 'USDT.e',
  name: 'Bridged USDT',
  logo: 'https://8f3ea9f2.sanguine-fe.pages.dev/_next/static/media/usdt.3c9cd2f8.svg',
  swapableType: 'USD',
  swapableOn: [CHAINS.AVALANCHE.id],
  visibilityRank: 100,
  color: 'green',
  priorityRank: 1,
  routeSymbol: 'USDT.e',
})

export const SUSD = new Token({
  addresses: {
    [CHAINS.OPTIMISM.id]: '0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9',
  },
  decimals: {
    [CHAINS.OPTIMISM.id]: 18,
  },
  symbol: 'sUSD',
  name: 'Synth sUSD',
  logo: 'https://8f3ea9f2.sanguine-fe.pages.dev/_next/static/media/susd.3aa0b6c4.svg',
  color: 'purple',
  swapableType: 'USD',
  swapableOn: [CHAINS.OPTIMISM.id],
  visibilityRank: 100,
  priorityRank: 1,
  routeSymbol: 'sUSD',
  coingeckoId: 'susd',
})

export const WSOHM = new Token({
  addresses: {
    [CHAINS.ETH.id]: '0xCa76543Cf381ebBB277bE79574059e32108e3E65',
    [CHAINS.ARBITRUM.id]: '0x30bD4e574a15994B35EF9C7a5bc29002F1224821',
    [CHAINS.AVALANCHE.id]: '0x240E332Cd26AaE10622B24160D23425A17256F5d',
  },
  decimals: {
    [CHAINS.ETH.id]: 18,
    [CHAINS.ARBITRUM.id]: 18,
    [CHAINS.AVALANCHE.id]: 18,
  },
  symbol: 'wsOHM',
  name: 'Wrapped sOHM',
  logo: 'https://8f3ea9f2.sanguine-fe.pages.dev/_next/static/media/ohm.1b779b45.svg',
  color: 'gray',
  swapableType: 'OHM',
  visibilityRank: 40,
  priorityRank: 6,
  routeSymbol: 'wsOHM',
  coingeckoId: 'wrapped-staked-olympus',
})

export const ONEDAI = new Token({
  addresses: {
    [CHAINS.HARMONY.id]: '0xef977d2f931c1978db5f6747666fa1eacb0d0339',
  },
  decimals: 18,
  symbol: '1DAI',
  name: 'Harmony Dai Stablecoin',
  logo: 'https://8f3ea9f2.sanguine-fe.pages.dev/_next/static/media/dai.ba6d3142.svg',
  swapableType: 'USD',
  swapableOn: [CHAINS.HARMONY.id],
  color: 'yellow',
  visibilityRank: 100,
  priorityRank: 6,
  routeSymbol: '1DAI',
})

export const ONEUSDC = new Token({
  visibilityRank: 101,
  addresses: {
    [CHAINS.HARMONY.id]: '0x985458e523db3d53125813ed68c274899e9dfab4',
  },
  decimals: {
    [CHAINS.HARMONY.id]: 6,
  },
  symbol: '1USDC',
  name: 'Harmony USD Coin',
  logo: 'https://8f3ea9f2.sanguine-fe.pages.dev/_next/static/media/usdc.d5dcb030.svg',
  swapableType: 'USD',
  swapableOn: [CHAINS.HARMONY.id],
  color: 'blue',
  priorityRank: 6,
  routeSymbol: '1USDC',
})

export const ONEUSDT = new Token({
  addresses: {
    [CHAINS.HARMONY.id]: '0x3c2b8be99c50593081eaa2a724f0b8285f5aba8f',
  },
  decimals: {
    [CHAINS.HARMONY.id]: 6,
  },
  symbol: '1USDT',
  name: 'Harmony USD Tether',
  logo: 'https://8f3ea9f2.sanguine-fe.pages.dev/_next/static/media/usdt.3c9cd2f8.svg',
  color: 'lime',
  swapableType: 'USD',
  swapableOn: [CHAINS.HARMONY.id],
  visibilityRank: 100,
  priorityRank: 6,
  routeSymbol: '1USDT',
})

export const BTCB = new Token({
  addresses: {
    [CHAINS.KLAYTN.id]: '0xe82f87ba4E97b2796aA0Fa4eFB06e8f0d2EB4FE1',
    [CHAINS.AVALANCHE.id]: '0x152b9d0FdC40C096757F570A51E494bd4b943E50',
    [CHAINS.DFK.id]: '0x7516EB8B8Edfa420f540a162335eACF3ea05a247',
  },
  decimals: {
    [CHAINS.KLAYTN.id]: 8,
    [CHAINS.AVALANCHE.id]: 8,
    [CHAINS.DFK.id]: 8,
  },
  symbol: 'BTC.b',
  name: 'Bitcoin',
  logo: 'https://8f3ea9f2.sanguine-fe.pages.dev/_next/static/media/btc.63077225.svg',
  swapableType: 'BTC.b',
  color: 'orange',
  priorityRank: 3,
  routeSymbol: 'BTC.b',
  coingeckoId: 'binance-bitcoin',
})

export const DAIE = new Token({
  addresses: {
    [CHAINS.AVALANCHE.id]: '0xd586E7F844cEa2F87f50152665BCbc2C279D8d70',
  },
  decimals: 18,
  symbol: 'DAI.e',
  name: 'Dai.e Token',
  logo: 'https://8f3ea9f2.sanguine-fe.pages.dev/_next/static/media/dai.ba6d3142.svg',
  swapableType: 'USD',
  swapableOn: [CHAINS.AVALANCHE.id],
  color: 'yellow',
  visibilityRank: 100,
  priorityRank: 2,
  routeSymbol: 'DAI.e',
})

export const KLAY = new Token({
  addresses: {
    [CHAINS.KLAYTN.id]: zeroAddress,
    [CHAINS.DFK.id]: '0x97855Ba65aa7ed2F65Ed832a776537268158B78a',
  },
  decimals: {
    [CHAINS.KLAYTN.id]: 18,
    [CHAINS.DFK.id]: 18,
  },
  symbol: 'KLAY',
  name: 'Klaytn',
  logo: 'https://8f3ea9f2.sanguine-fe.pages.dev/_next/static/media/klay.a50be928.svg',
  isNative: true,
  swapableType: 'KLAY',
  color: 'red',
  priorityRank: 3,
  routeSymbol: 'KLAY',
  coingeckoId: 'klay-token',
})

export const WKLAY = new Token({
  addresses: {
    [CHAINS.KLAYTN.id]: '0x5819b6af194A78511c79C85Ea68D2377a7e9335f',
  },
  decimals: {
    [CHAINS.KLAYTN.id]: 18,
  },
  symbol: 'WKLAY',
  name: 'Wrapped Klaytn',
  logo: 'https://8f3ea9f2.sanguine-fe.pages.dev/_next/static/media/klay.a50be928.svg',
  swapableType: 'WKLAY',
  color: 'red',
  priorityRank: 3,
  routeSymbol: 'WKLAY',
})

export const MATIC = new Token({
  addresses: {
    [CHAINS.DFK.id]: '0xD17a41Cd199edF1093A9Be4404EaDe52Ec19698e',
  },
  decimals: 18,
  symbol: 'MATIC',
  name: 'MATIC',
  logo: 'https://8f3ea9f2.sanguine-fe.pages.dev/_next/static/media/matic.237cd2b6.svg',
  isNative: true,
  swapableType: 'MATIC',
  color: 'blue',
  visibilityRank: 90,
  priorityRank: 3,
  routeSymbol: 'MATIC',
  coingeckoId: 'matic-network',
})

export const POL = new Token({
  addresses: {
    [CHAINS.POLYGON.id]: zeroAddress,
  },
  decimals: 18,
  symbol: 'MATIC',
  name: 'MATIC',
  logo: 'https://8f3ea9f2.sanguine-fe.pages.dev/_next/static/media/matic.237cd2b6.svg',
  isNative: true,
  swapableType: 'MATIC',
  color: 'blue',
  visibilityRank: 90,
  priorityRank: 3,
  routeSymbol: 'POL',
  coingeckoId: 'matic-network',
})

export const WPOL = new Token({
  addresses: {
    [CHAINS.POLYGON.id]: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
  },
  decimals: 18,
  symbol: 'WMATIC',
  name: 'WMATIC',
  logo: 'https://8f3ea9f2.sanguine-fe.pages.dev/_next/static/media/matic.237cd2b6.svg',
  swapableType: 'MATIC',
  color: 'blue',
  visibilityRank: 90,
  priorityRank: 3,
  routeSymbol: 'WPOL',
})

export const FTM = new Token({
  addresses: {
    [CHAINS.FANTOM.id]: zeroAddress,
    [CHAINS.DFK.id]: '0x2Df041186C844F8a2e2b63F16145Bc6Ff7d23E25',
  },
  decimals: 18,
  symbol: 'FTM',
  name: 'Fantom',
  logo: 'https://8f3ea9f2.sanguine-fe.pages.dev/_next/static/media/ftm.af71a88f.svg',
  swapableType: 'FTM',
  swapableOn: [CHAINS.FANTOM.id],
  color: 'blue',
  priorityRank: 5,
  routeSymbol: 'FTM',
  coingeckoId: 'fantom',
})

export const WFTM = new Token({
  addresses: {
    [CHAINS.FANTOM.id]: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
  },
  decimals: 18,
  symbol: 'WFTM',
  name: 'Wrapped Fantom',
  logo: 'https://8f3ea9f2.sanguine-fe.pages.dev/_next/static/media/ftm.af71a88f.svg',
  swapableType: 'FTM',
  swapableOn: [CHAINS.FANTOM.id],
  color: 'blue',
  priorityRank: 5,
  routeSymbol: 'WFTM',
})

export const WETH = new Token({
  addresses: {
    [CHAINS.ETH.id]: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    [CHAINS.OPTIMISM.id]: '0x121ab82b49B2BC4c7901CA46B8277962b4350204',
    [CHAINS.BOBA.id]: '0xd203De32170130082896b4111eDF825a4774c18E',
    [CHAINS.METIS.id]: '0x420000000000000000000000000000000000000A',
    [CHAINS.MOONBEAM.id]: '0x3192Ae73315c3634Ffa217f71CF6CBc30FeE349A',
    [CHAINS.DOGE.id]: '0x9F4614E4Ea4A0D7c4B1F946057eC030beE416cbB',
    [CHAINS.KLAYTN.id]: '0xCD6f29dC9Ca217d0973d3D21bF58eDd3CA871a86',
    [CHAINS.BASE.id]: '0x4200000000000000000000000000000000000006',
    [CHAINS.ARBITRUM.id]: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
    [CHAINS.BLAST.id]: '0x4300000000000000000000000000000000000004',
    [CHAINS.BERACHAIN.id]: '0x2F6F07CDcf3588944Bf4C42aC74ff24bF56e7590',
  },
  decimals: 18,
  symbol: 'WETH',
  name: 'Wrapped ETH',
  logo: 'https://8f3ea9f2.sanguine-fe.pages.dev/_next/static/media/weth.19fa93ab.svg',
  swapableType: 'ETH',
  color: 'sky',
  priorityRank: 3,
  routeSymbol: 'WETH',
})

export const CRVUSDC = new Token({
  visibilityRank: 101,
  addresses: {
    [CHAINS.BASE.id]: '0x417Ac0e078398C154EdFadD9Ef675d30Be60Af93',
  },
  decimals: {
    [CHAINS.BASE.id]: 18,
  },
  swapExceptions: {},
  symbol: 'crvUSD',
  name: 'Curve.fi USD',
  logo: 'https://8f3ea9f2.sanguine-fe.pages.dev/_next/static/media/crvusd.e65e6479.svg',
  swapableType: 'USD',
  swapableOn: [],
  color: 'yellow',
  priorityRank: 1,
  routeSymbol: 'crvUSD',
  coingeckoId: 'crvusd',
})

export const USDBC = new Token({
  visibilityRank: 101,
  addresses: {
    [CHAINS.BASE.id]: '0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA',
  },
  decimals: {
    [CHAINS.BASE.id]: 6,
  },
  swapExceptions: {},
  symbol: 'USDbC',
  name: 'USD Base Coin',
  logo: 'https://8f3ea9f2.sanguine-fe.pages.dev/_next/static/media/usdc.d5dcb030.svg',
  swapableType: 'USD',
  swapableOn: [],
  color: 'blue',
  priorityRank: 1,
  routeSymbol: 'USDbC',
  coingeckoId: 'bridged-usd-coin-base',
})

export const USDB = new Token({
  visibilityRank: 101,
  addresses: {
    [CHAINS.BLAST.id]: '0x4300000000000000000000000000000000000003',
  },
  decimals: {
    [CHAINS.BLAST.id]: 18,
  },
  swapExceptions: {},
  symbol: 'USDB',
  name: 'Blast Rebasing USD',
  logo: 'https://8f3ea9f2.sanguine-fe.pages.dev/_next/static/media/usdb.33190604.svg',
  swapableType: 'USD',
  swapableOn: [],
  color: 'blue',
  priorityRank: 125,
  routeSymbol: 'USDB',
})

export const SPECTRAL = new Token({
  priorityRank: 6,
  addresses: {
    [CHAINS.ETH.id]: '0xAdF7C35560035944e805D98fF17d58CDe2449389',
    [CHAINS.BASE.id]: '0x96419929d7949D6A801A6909c145C8EEf6A40431',
  },
  decimals: {
    [CHAINS.ETH.id]: 18,
    [CHAINS.BASE.id]: 18,
  },
  symbol: 'SPEC',
  name: 'Spectral Token',
  logo: 'https://8f3ea9f2.sanguine-fe.pages.dev/_next/static/media/spectral.6d51750c.svg',
  swapableType: 'SPEC',
  color: 'blue',
  routeSymbol: 'SPEC',
})

export const HYPE = new Token({
  priorityRank: 6,
  addresses: {
    [CHAINS.HYPEREVM.id]: zeroAddress,
  },
  decimals: 18,
  symbol: 'HYPE',
  name: 'Hyperliquid',
  logo: 'https://synapseprotocol.com/_next/static/media/hyperliquid.3dafe2fd.svg',
  swapableType: 'HYPE',
  color: 'green',
  routeSymbol: 'HYPE',
})
