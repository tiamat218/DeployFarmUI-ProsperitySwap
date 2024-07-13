import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [

  
 
  /* {
    //  todo für farming token preis berechnung (später PID tauschen!!)
    pid: 26,
    risk: 5,
    lpSymbol: 'ADAMANT-BUSD',  
    lpAddresses: {
      97: '',
      56: '0x1DFbeE2462a11BCbE52C6c94203CB256c740DfcD',    // ADAMANT-BUSD  
    },
    tokenSymbol: 'ADAMANT',
    tokenAddresses: {
      97: '',
      56: '0x3c3B33bA5d5e6Bcf4fe71000Bf0D282709f019d9',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

  {
    //  todo für NETZWER WÄHRUNG  preis berechnung (später PID tauschen!!)
    pid: 3,
    risk: 5,
    lpSymbol: 'BNB-BUSD',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

  {

  // nur zum test von pools = einzel token staking für rewards
  pid: 2,
  risk: 5,
  isTokenOnly: true,
  lpSymbol: 'ADAMANT',
  lpAddresses: {
    97: '',
    56: '0x1DFbeE2462a11BCbE52C6c94203CB256c740DfcD',  // ADAMANT-BUSD
  },
  tokenSymbol: 'ADAMANT',
  tokenAddresses: {
    97: '',     
    56: '0x3c3B33bA5d5e6Bcf4fe71000Bf0D282709f019d9',
  },
  quoteTokenSymbol: QuoteToken.BUSD,
  quoteTokenAdresses: contracts.busd,
}, */


// die richtigen pools für meine blast MC

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
  



]

export default farms