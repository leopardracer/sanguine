import express from 'express'

import {
  pendingTransactionsMissingClaimController,
  pendingTransactionsMissingProofController,
  pendingTransactionsMissingRelayController,
  pendingTransactionsMissingRelayExceedDeadlineController
} from '../controllers/pendingTransactionsController'

const router = express.Router()

/**
 * @openapi
 * /pending-transactions/missing-claim:
 *   get:
 *     summary: Get pending transactions missing claim
 *     description: Retrieves a list of transactions that have been deposited, relayed, and proven, but not yet claimed
 *     responses:
 *       200:
 *         description: Successful response (may be an empty array)
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   Bridge:
 *                     type: object
 *                     description: General transaction fields
 *                   BridgeRequest:
 *                     type: object
 *                     description: Deposit information
 *                   BridgeRelay:
 *                     type: object
 *                     description: Relay information
 *                   BridgeRefund:
 *                     type: object
 *                     description: Refund information
 *                   BridgeProof:
 *                     type: object
 *                     description: Proof information (if available)
 *                   BridgeClaim:
 *                     type: object
 *                     description: Claim information (if available)
 *                   BridgeDispute:
 *                     type: object
 *                     description: Dispute information (if available)
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
router.get('/missing-claim', pendingTransactionsMissingClaimController)

/**
 * @openapi
 * /pending-transactions/missing-proof:
 *   get:
 *     summary: Get pending transactions missing proof
 *     description: Retrieves a list of transactions that have been deposited and relayed, but not yet proven
 *     responses:
 *       200:
*         description: Successful response (may be an empty array)
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   deposit:
 *                     type: object
 *                   relay:
 *                     type: object
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
router.get('/missing-proof', pendingTransactionsMissingProofController)

/**
 * @openapi
 * /pending-transactions/missing-relay:
 *   get:
 *     summary: Get pending transactions missing relay
 *     description: Retrieves a list of transactions that have been deposited, but not yet relayed or refunded
 *     responses:
 *       200:
 *         description: Successful response (may be an empty array)
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   deposit:
 *                     type: object
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
router.get('/missing-relay', pendingTransactionsMissingRelayController)

/**
 * @openapi
 * /pending-transactions/exceed-deadline:
 *   get:
 *     summary: Get pending transactions exceed deadline
 *     description: Retrieves a list of transactions that have been deposited, but not yet relayed or refunded and have exceeded the deadline
 *     responses:
 *       200:
 *         description: Successful response (may be an empty array)
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   deposit:
 *                     type: object
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
router.get(
  '/exceed-deadline',
  pendingTransactionsMissingRelayExceedDeadlineController
)

export default router
