/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers'
import type { FunctionFragment, Result } from '@ethersproject/abi'
import type { Listener, Provider } from '@ethersproject/providers'
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from './common'

export declare namespace ISynapseIntentRouter {
  export type StepParamsStruct = {
    token: string
    amount: BigNumberish
    msgValue: BigNumberish
    zapData: BytesLike
  }

  export type StepParamsStructOutput = [
    string,
    BigNumber,
    BigNumber,
    string
  ] & {
    token: string
    amount: BigNumber
    msgValue: BigNumber
    zapData: string
  }
}

export interface SynapseIntentPreviewerInterface extends utils.Interface {
  functions: {
    'NATIVE_GAS_TOKEN()': FunctionFragment
    'previewIntent(address,address,uint256,address,address,uint256)': FunctionFragment
  }

  getFunction(
    nameOrSignatureOrTopic: 'NATIVE_GAS_TOKEN' | 'previewIntent'
  ): FunctionFragment

  encodeFunctionData(
    functionFragment: 'NATIVE_GAS_TOKEN',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'previewIntent',
    values: [string, string, BigNumberish, string, string, BigNumberish]
  ): string

  decodeFunctionResult(
    functionFragment: 'NATIVE_GAS_TOKEN',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'previewIntent',
    data: BytesLike
  ): Result

  events: {}
}

export interface SynapseIntentPreviewer extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  interface: SynapseIntentPreviewerInterface

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>
  listeners(eventName?: string): Array<Listener>
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this
  removeAllListeners(eventName?: string): this
  off: OnEvent<this>
  on: OnEvent<this>
  once: OnEvent<this>
  removeListener: OnEvent<this>

  functions: {
    NATIVE_GAS_TOKEN(overrides?: CallOverrides): Promise<[string]>

    previewIntent(
      swapQuoter: string,
      forwardTo: string,
      slippageWei: BigNumberish,
      tokenIn: string,
      tokenOut: string,
      amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, ISynapseIntentRouter.StepParamsStructOutput[]] & {
        amountOut: BigNumber
        steps: ISynapseIntentRouter.StepParamsStructOutput[]
      }
    >
  }

  NATIVE_GAS_TOKEN(overrides?: CallOverrides): Promise<string>

  previewIntent(
    swapQuoter: string,
    forwardTo: string,
    slippageWei: BigNumberish,
    tokenIn: string,
    tokenOut: string,
    amountIn: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, ISynapseIntentRouter.StepParamsStructOutput[]] & {
      amountOut: BigNumber
      steps: ISynapseIntentRouter.StepParamsStructOutput[]
    }
  >

  callStatic: {
    NATIVE_GAS_TOKEN(overrides?: CallOverrides): Promise<string>

    previewIntent(
      swapQuoter: string,
      forwardTo: string,
      slippageWei: BigNumberish,
      tokenIn: string,
      tokenOut: string,
      amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, ISynapseIntentRouter.StepParamsStructOutput[]] & {
        amountOut: BigNumber
        steps: ISynapseIntentRouter.StepParamsStructOutput[]
      }
    >
  }

  filters: {}

  estimateGas: {
    NATIVE_GAS_TOKEN(overrides?: CallOverrides): Promise<BigNumber>

    previewIntent(
      swapQuoter: string,
      forwardTo: string,
      slippageWei: BigNumberish,
      tokenIn: string,
      tokenOut: string,
      amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>
  }

  populateTransaction: {
    NATIVE_GAS_TOKEN(overrides?: CallOverrides): Promise<PopulatedTransaction>

    previewIntent(
      swapQuoter: string,
      forwardTo: string,
      slippageWei: BigNumberish,
      tokenIn: string,
      tokenOut: string,
      amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>
  }
}
