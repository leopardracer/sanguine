import request from 'supertest'
import express from 'express'

import bridgeTxInfoRoute from '../routes/bridgeTxInfoRoute'
import { USDC } from '../constants/bridgeable'
import { NativeGasAddress } from '../constants'
import { UNSUPPORTED_CHAIN } from './testConstants'

const app = express()
app.use('/bridgeTxInfo', bridgeTxInfoRoute)

describe('Bridge TX Info Route', () => {
  it('should return bridge transaction info for valid input', async () => {
    const response = await request(app).get('/bridgeTxInfo').query({
      fromChain: '1',
      toChain: '137',
      fromToken: USDC.addresses[1],
      toToken: USDC.addresses[137],
      amount: '1000',
      destAddress: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
    })

    expect(response.status).toBe(200)
    expect(Array.isArray(response.body)).toBe(true)
    expect(response.body.length).toBeGreaterThan(0)
    expect(response.body[0]).toHaveProperty('data')
    expect(response.body[0]).toHaveProperty(
      'to',
      '0xd5a597d6e7ddf373a92C8f477DAAA673b0902F48'
    )
  }, 10_000)

  it('should return bridge transaction info for valid input with valid originUserAddress', async () => {
    const response = await request(app).get('/bridgeTxInfo').query({
      fromChain: '1',
      toChain: '137',
      fromToken: USDC.addresses[1],
      toToken: USDC.addresses[137],
      amount: '1000',
      destAddress: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
      originUserAddress: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
    })

    expect(response.status).toBe(200)
    expect(Array.isArray(response.body)).toBe(true)
    expect(response.body.length).toBeGreaterThan(0)
    expect(response.body[0]).toHaveProperty('data')
    expect(response.body[0]).toHaveProperty(
      'to',
      '0xd5a597d6e7ddf373a92C8f477DAAA673b0902F48'
    )
  }, 10_000)

  it('should return 400 for invalid originUserAddress', async () => {
    const response = await request(app).get('/bridgeTxInfo').query({
      fromChain: '1',
      toChain: '137',
      fromToken: USDC.addresses[1],
      toToken: USDC.addresses[137],
      amount: '1000',
      destAddress: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
      originUserAddress: 'invalid_address',
    })

    expect(response.status).toBe(400)
    expect(response.body.error).toHaveProperty(
      'message',
      'Invalid originUserAddress address'
    )
  }, 10_000)

  it('should return 400 for unsupported route', async () => {
    const response = await request(app).get('/bridgeTxInfo').query({
      fromChain: '1',
      toChain: '10',
      fromToken: NativeGasAddress,
      toToken: USDC.addresses[10],
      amount: '10',
      destAddress: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
    })
    expect(response.status).toBe(400)
    expect(response.body.error).toHaveProperty(
      'message',
      'No valid route exists for the chain/token combination'
    )
  })

  it('should return 400 for unsupported fromChain', async () => {
    const response = await request(app).get('/bridgeTxInfo').query({
      fromChain: UNSUPPORTED_CHAIN,
      toChain: '137',
      fromToken: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
      toToken: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
      amount: '1000',
      destAddress: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
    })
    expect(response.status).toBe(400)
    expect(response.body.error).toHaveProperty(
      'message',
      'Unsupported fromChain'
    )
  })

  it('should return 400 for invalid fromToken address', async () => {
    const response = await request(app).get('/bridgeTxInfo').query({
      fromChain: '1',
      toChain: '137',
      fromToken: 'invalid_address',
      toToken: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
      amount: '1000',
      destAddress: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
    })
    expect(response.status).toBe(400)
    expect(response.body.error).toHaveProperty(
      'message',
      'Invalid fromToken address'
    )
  })

  it('should return 400 for token not supported on specified chain', async () => {
    const response = await request(app).get('/bridgeTxInfo').query({
      fromChain: '1',
      toChain: '137',
      fromToken: '0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F', // SNX on Ethereum (Not supported)
      toToken: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
      amount: '1000',
      destAddress: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
    })
    expect(response.status).toBe(400)
    expect(response.body.error).toHaveProperty(
      'message',
      'Invalid fromToken address'
    )
  })

  it('should return 400 for missing amount', async () => {
    const response = await request(app).get('/bridgeTxInfo').query({
      fromChain: '1',
      toChain: '137',
      fromToken: USDC.addresses[1],
      toToken: USDC.addresses[137],
      destAddress: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
    })
    expect(response.status).toBe(400)
    expect(response.body.error).toHaveProperty('field', 'amount')
  })

  it('should return 400 for invalid destAddress', async () => {
    const response = await request(app).get('/bridgeTxInfo').query({
      fromChain: '1',
      toChain: '137',
      fromToken: USDC.addresses[1],
      toToken: USDC.addresses[137],
      amount: '1000',
      destAddress: 'invalid_address',
    })
    expect(response.status).toBe(400)
    expect(response.body.error).toHaveProperty(
      'message',
      'Invalid destination address'
    )
  })

  it('should return 400 for amount with too many decimals', async () => {
    const response = await request(app).get('/bridgeTxInfo').query({
      fromChain: '1',
      toChain: '137',
      fromToken: USDC.addresses[1],
      toToken: USDC.addresses[137],
      amount: '1000.123456789', // Assuming USDC has 6 decimals
      destAddress: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
    })

    expect(response.status).toBe(400)
    expect(response.body.error).toHaveProperty(
      'message',
      expect.stringContaining('Amount has too many decimals')
    )
  }, 10000)
})
