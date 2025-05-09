import express from 'express'

import indexRoute from './indexRoute'
import swapRoute from './swapRoute'
import swapTxInfoRoute from './swapTxInfoRoute'
import swapV2Route from './swapV2Route'
import bridgeRoute from './bridgeRoute'
import bridgeTxInfoRoute from './bridgeTxInfoRoute'
import bridgeV2Route from './bridgeV2Route'
import synapseTxIdRoute from './synapseTxIdRoute'
import bridgeTxStatusRoute from './bridgeTxStatusRoute'
import destinationTxRoute from './destinationTxRoute'
import tokenListRoute from './tokenListRoute'
import destinationTokensRoute from './destinationTokensRoute'
import bridgeLimitsRoute from './bridgeLimitsRoute'
import chainIconRoute from './chainIconRoute'
import addressIconRoute from './addressIconRoute'
import intentRoute from './intentRoute'

const router: express.Router = express.Router()

router.use('/', indexRoute)
router.use('/intent', intentRoute)
router.use('/swap', swapRoute)
router.use('/swapTxInfo', swapTxInfoRoute)
router.use('/swap/v2', swapV2Route)
router.use('/bridge', bridgeRoute)
router.use('/bridgeTxInfo', bridgeTxInfoRoute)
router.use('/bridgeLimits', bridgeLimitsRoute)
router.use('/bridge/v2', bridgeV2Route)
router.use('/synapseTxId', synapseTxIdRoute)
router.use('/bridgeTxStatus', bridgeTxStatusRoute)
router.use('/destinationTx', destinationTxRoute)
router.use('/tokenList', tokenListRoute)
router.use('/destinationTokens', destinationTokensRoute)
router.use('/chainIcon', chainIconRoute)
router.use('/tokenIcon', addressIconRoute)

export default router
