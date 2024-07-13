import BigNumber from 'bignumber.js'
import { FarmConfig, PoolConfig } from 'config/constants/types'
 
export interface Farm extends FarmConfig {
  tokenAmount?: BigNumber
  lpTotalInQuoteToken?: BigNumber
  tokenPriceVsQuote?: BigNumber
  poolWeight?: number
  depositFeeBP?: number
  tokenPerSecond?: number
  changeMultiplier?: number
  changeDivider?: number
  changeTokenPerBNB?: number
  lastWinLott?: number
  lastWinDice?: number
  lastWinFlip?: number

  tokenSold?: number
    userData?: {
    allowance: BigNumber
    tokenBalance: BigNumber
    stakedBalance: BigNumber
    earnings: BigNumber
    harvestTimeStamp: BigNumber
    harvestStatus: number
  }
  lpTotalSupply?: BigNumber
  lpTokenBalanceMC?: BigNumber
}

export interface Pool extends PoolConfig {
  totalStaked?: BigNumber
  startBlock?: number
  endBlock?: number
  userData?: {
    allowance: BigNumber
    stakingTokenBalance: BigNumber
    stakedBalance: BigNumber
    pendingReward: BigNumber
    harvestTimeStamp: BigNumber
    harvestStatus: number
  }
}

// Slices states

export interface FarmsState {
  data: Farm[]
}

export interface PoolsState {
  data: Pool[]
}

// Global state

export interface State {
  farms: FarmsState
  pools: PoolsState
}
