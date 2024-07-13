import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout, Button, BackgroundImage } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'



import FarmStakingCard from './components/FarmStakingCard'
import FarmStakingCard1 from './components/FarmStakingCard1'
import CakeStats from './components/CakeStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import TwitterCard from './components/TwitterCard'
import InfoCard from './components/InfoCard'

// import Timer from './components/Timer'

import TimerCard from './components/TimerCard'



const Hero = styled.div`  // mobile verision
  align-items: center;
  background-image: url('/images/egg/3b.png');
  background-repeat: no-repeat;

  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-top: -160px;
  margin-bottom: -25px;
  height: 325px;
  padding-top: 1px;

  ${({ theme }) => theme.mediaQueries.lg} {  // desktop version
    background-image: url('/images/egg/3b.png');
    background-size: cover;
    background-position: center;
    
    margin: auto;
    margin-top: -130px;
    margin-bottom: -230px;
    height: 760px;
    
    padding-top: 1;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const Home: React.FC = () => {
  const TranslateString = useI18n()

  return (



    <Page>



    
<br/>
      <Hero>
      <br/>
      </Hero>

      <Button 
              as="a"
              variant="secondary"
              href="TODO - swap to the token on our dex UI!"
              target="_blank" >
              Get Global Money Token
        </Button>

        <br/><br/>

        <Text color='secondary'> Advanced Sustainable Earning Technology</Text>
        <Text color='secondary'> Blast yield + Transaction fees for BuyBack!</Text>

      {/* <Timer /> */}

      <div>


        <Cards>
          <FarmStakingCard />
        {/*   <FarmStakingCard1 />


          <TimerCard /> */}

          <TwitterCard/>

          <CakeStats />

          <InfoCard/>         

          <TotalValueLockedCard />

        </Cards>
        
      </div>
    </Page>
  )
}

export default Home
