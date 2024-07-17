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
    label: 'Swap',
    icon: 'TradeIcon',
    href: 'https://deployswap-u-ifor-prosp-blast-git-develop-tiamat218s-projects.vercel.app/swap',
  },


  {
    label: 'Price Info',
    icon: 'InfoIcon',
    items: [

      {
        label: 'GMT on Dexscreener',
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
