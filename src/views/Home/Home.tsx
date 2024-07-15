import React from 'react'
import styled from 'styled-components'
import { Heading, BaseLayout, Button } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'

import FarmStakingCard from './components/FarmStakingCard'
import CakeStats from './components/CakeStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import TwitterCard from './components/TwitterCard'
import InfoCard from './components/InfoCard'




const Content = styled.div`
  z-index: 1;
  padding: 20px;
  position: relative;
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
      <Content>
        <Button 
          as="a"
          variant="primary"
          href=""
          target="_blank" >
          Get GMT
        </Button>

        <Heading as="h2" color='#bdbdbd'>Advanced Sustainable Earning Technology</Heading>
        <Heading as="h2" color='#bdbdbd' mb="12px">Blast Yield + Transaction fees for BuyBack!</Heading>

        <Cards>
          <FarmStakingCard />
          <TwitterCard />
          <CakeStats />
          <InfoCard />
          <TotalValueLockedCard />
        </Cards>
      </Content>
    </Page>
  )
}

export default Home
