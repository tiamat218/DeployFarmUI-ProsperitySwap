import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },

  {
    label: "Farms",
    icon: "FarmIcon",
    href: "/farms",
  },

 {
    label: 'Pool',
    icon: 'PoolIcon',
    href: '/pools',
  },



  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'todo link our swap ui website',
        // href: 'https://pancakeswap.finance/swap?outputCurrency=0x8f43c697Ea453408B242D8dEa171611320480043',
      },
      {
        label: 'Liquidity',
        href: 'todo link our LIQU adding ui website',
      },

    ],
  },

  {
    label: 'Price Info',
    icon: 'InfoIcon',
    items: [

      {
        label: 'Dexscreener',
        href: 'https://dexscreener.com/blast/0xd0dc1af4f93916d662fdbcfaf5b5e2904f7d5514',
      }
    ],

  },





  {
    label: 'More / Team',
    icon: 'MoreIcon',
    items: [
    
      {
        label: 'Developer',
        href: 'https://linkedin.com/in/frank-kulow',
      },

      {
        label: 'Team',
        href: '/team',
      },
    ],
  },

/*   {
      label: 'Countdown',
      icon: 'MoreIcon',
      href: 'https://bscscan.com/',
  }, */

/*   {
    label: 'Pre-Sale',
    icon: 'IfoIcon',
    href: '/presale',
  }, */


 /*  {
      label: 'Review / Listing',
      icon: 'AuditIcon',
      items: [
      {
          label: 'RugDoc rating Eternity',
          href: 'https://rugdoc.io/project/eternity-money/',      
        },
        
        {
      label: 'Dappradar Listing',
      href: 'https://dappradar.com/binance-smart-chain/defi/eternity-money-silver',      
        },
   
        {
      label: 'vFat listing Silver',
      href: 'https://vfat.tools/bsc/silver',
       }, 

      ],
  }, */






  
]

export default config
