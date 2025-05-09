import { Zero } from '@ethersproject/constants'
import { BigNumber } from 'ethers'

import { Ticker } from './ticker'

export type FastBridgeQuote = {
  ticker: Ticker
  destAmount: BigNumber
  maxOriginAmount: BigNumber
  fixedFee: BigNumber
  originFastBridge: string
  destFastBridge: string
  relayerAddr: string
  updatedAt: number
}

export type FastBridgeQuoteAPI = {
  origin_chain_id: number
  origin_token_addr: string
  dest_chain_id: number
  dest_token_addr: string
  dest_amount: string
  max_origin_amount: string
  fixed_fee: string
  origin_fast_bridge_address: string
  dest_fast_bridge_address: string
  relayer_addr: string
  updated_at: string
}

export const unmarshallFastBridgeQuote = (
  quote: FastBridgeQuoteAPI
): FastBridgeQuote => {
  return {
    ticker: {
      originToken: {
        chainId: quote.origin_chain_id,
        token: quote.origin_token_addr,
      },
      destToken: {
        chainId: quote.dest_chain_id,
        token: quote.dest_token_addr,
      },
    },
    destAmount: BigNumber.from(quote.dest_amount),
    maxOriginAmount: BigNumber.from(quote.max_origin_amount),
    fixedFee: BigNumber.from(quote.fixed_fee),
    originFastBridge: quote.origin_fast_bridge_address,
    destFastBridge: quote.dest_fast_bridge_address,
    relayerAddr: quote.relayer_addr,
    updatedAt: Date.parse(quote.updated_at),
  }
}

export const marshallFastBridgeQuote = (
  quote: FastBridgeQuote
): FastBridgeQuoteAPI => {
  return {
    origin_chain_id: quote.ticker.originToken.chainId,
    origin_token_addr: quote.ticker.originToken.token,
    dest_chain_id: quote.ticker.destToken.chainId,
    dest_token_addr: quote.ticker.destToken.token,
    dest_amount: quote.destAmount.toString(),
    max_origin_amount: quote.maxOriginAmount.toString(),
    fixed_fee: quote.fixedFee.toString(),
    origin_fast_bridge_address: quote.originFastBridge,
    dest_fast_bridge_address: quote.destFastBridge,
    relayer_addr: quote.relayerAddr,
    updated_at: new Date(quote.updatedAt).toISOString(),
  }
}

export const applyQuote = (
  quote: FastBridgeQuote,
  originAmount: BigNumber
): BigNumber => {
  if (originAmount.eq(Zero) || originAmount.gt(quote.maxOriginAmount)) {
    return Zero
  }
  // After these checks: 0 < originAmount <= quote.maxOriginAmount
  const destAmount = getDestAmount(quote, originAmount)
  // Check that the destination amount is greater than the fixed fee
  if (destAmount.lt(quote.fixedFee)) {
    return Zero
  }
  return destAmount.sub(quote.fixedFee)
}

export const getDestAmount = (
  quote: FastBridgeQuote,
  originAmount: BigNumber
): BigNumber => {
  return originAmount.mul(quote.destAmount).div(quote.maxOriginAmount)
}

export const getOriginAmount = (
  quote: FastBridgeQuote,
  destAmount: BigNumber
): BigNumber => {
  return destAmount.mul(quote.maxOriginAmount).div(quote.destAmount)
}
