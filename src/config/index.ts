import BigNumber from 'bignumber.js/bignumber'

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

export const CAKE_PER_BLOCK = new BigNumber(1) // TODO  ganze calc läuft auf token per second, also rausfinden wie wir das umbauen ...
export const BLOCKS_PER_YEAR = new BigNumber(31851360) // TODO
export const BSC_BLOCK_TIME = 3  // TODO

export const CAKE_POOL_PID = 1
