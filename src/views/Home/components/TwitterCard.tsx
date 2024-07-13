import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import styled from 'styled-components'
import { Timeline } from 'react-twitter-widgets'
import useI18n from 'hooks/useI18n'

const StyledTwitterCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  border: 1px solid rgba(15, 150, 242, 0.34);
`


const TwitterCard = () => {
  const TranslateString = useI18n()

  return (
    <StyledTwitterCard>
      <CardBody>
        <Heading color='secondary' size="xl" mb="24px">
          ANNOUNCEMENTS
        </Heading>
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'GlobalMoney2024'
          }}
          options={{
            height: '350',
            chrome: "noheader, nofooter",
            width: "400"
          }}
        />
      </CardBody>
    </StyledTwitterCard>
  )
}

export default TwitterCard
