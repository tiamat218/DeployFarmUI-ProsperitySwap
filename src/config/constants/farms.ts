import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [

// die richtigen pools für meinen blast MC

{
  pid: 0,  // für farmtoken preis berechung
  risk: 1,
  lpSymbol: 'WETH - GMT',  
  lpAddresses: {
    81457: '0xD0Dc1Af4f93916D662fdbCfaf5b5e2904F7d5514',
    97: '',
    56: '',    
  },
  tokenSymbol: 'GMT',
  tokenAddresses: {
    81457: '0xB60dF4A1db61B173d0d774ffa813C3c37070E38b',
    97: '',
    56: '',
  },
  quoteTokenSymbol: QuoteToken.BNB,
  quoteTokenAdresses: contracts.wbnb,
},

{
pid: 1,
risk: 1,
lpSymbol: 'WETH - USDB',  
lpAddresses: {
  81457: '0xc715cB6E8A172473d56221218586cCea6b33428a',
  97: '',
  56: '',    
},
tokenSymbol: 'WETH',
tokenAddresses: {
  81457: '0x4300000000000000000000000000000000000004',
  97: '',
  56: '',
},
quoteTokenSymbol: QuoteToken.BUSD,
quoteTokenAdresses: contracts.busd,
},

{
pid: 2,
risk: 1,
lpSymbol: 'WETH - BTC',  
lpAddresses: {
  81457: '0xbb046B9d386AC5C9409D5AD89C67dfe293322aA3',
  97: '',
  56: '',   
},
tokenSymbol: 'BTC',
tokenAddresses: {
  81457: '0xF7bc58b8D8f97ADC129cfC4c9f45Ce3C0E1D2692',
  97: '',
  56: '',
},
quoteTokenSymbol: QuoteToken.BNB,
quoteTokenAdresses: contracts.wbnb,
},
  
{
  pid: 3,  // für farmtoken preis berechung
  risk: 1,
  lpSymbol: 'USDB - GMT',  
  lpAddresses: {
    81457: '0xb42B986Fd135E4631454d509BB434317B4850781',
    97: '',
    56: '',    
  },
  tokenSymbol: 'GMT',
  tokenAddresses: {
    81457: '0xB60dF4A1db61B173d0d774ffa813C3c37070E38b',
    97: '',
    56: '',
  },
  quoteTokenSymbol: QuoteToken.BUSD,
  quoteTokenAdresses: contracts.busd,
},



]

export default farms