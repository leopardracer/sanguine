import { SupportedChainId } from '../../../constants'
import { ETH_USDC } from '../../../constants/testValues'
import { ETH_NATIVE_TOKEN_ADDRESS } from '../../../utils'
import { USER_SIMULATED_ADDRESS } from '../../core'
import {
  KyberSwapBuildResponse,
  KyberSwapEngine,
  KyberSwapQuoteResponse,
} from '../kyberSwapEngine'

global.fetch = require('node-fetch')

const TEST_TIMEOUT = 5000

// Unskip to check if integration is working
describe.skip('Integration test: KyberSwapEngine', () => {
  it('Ethereum USDC -> ETH', async () => {
    const kyberSwapEngine = new KyberSwapEngine()
    let response = await kyberSwapEngine.getQuoteResponse(
      SupportedChainId.ETH,
      {
        tokenIn: ETH_USDC,
        tokenOut: ETH_NATIVE_TOKEN_ADDRESS,
        amountIn: '1000000000',
        gasInclude: true,
      },
      TEST_TIMEOUT
    )
    expect(response).not.toBeNull()
    if (!response) {
      return
    }
    const quoteResponse: KyberSwapQuoteResponse = await response.json()
    console.log(JSON.stringify(quoteResponse, null, 2))

    response = await kyberSwapEngine.getBuildResponse(
      SupportedChainId.ETH,
      {
        routeSummary: quoteResponse.data.routeSummary,
        sender: USER_SIMULATED_ADDRESS,
        recipient: USER_SIMULATED_ADDRESS,
        deadline: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7,
        slippageTolerance: 100,
        enableGasEstimation: false,
      },
      TEST_TIMEOUT
    )
    expect(response).not.toBeNull()
    if (!response) {
      return
    }
    const buildResponse: KyberSwapBuildResponse = await response.json()
    console.log(JSON.stringify(buildResponse, null, 2))
  })
})
