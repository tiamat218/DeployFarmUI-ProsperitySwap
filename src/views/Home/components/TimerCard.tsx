import React from 'react'
import styled from 'styled-components'
import { Image, Card, CardBody, Heading, Button, Text } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
// import Timer2 from './Timer2'
// import Timer3 from './Timer3'



const StyledTotalValueLockedCard = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
  border: 1px solid rgba(15, 150, 242, 0.34);
`

const InfoCard = () => {
  const TranslateString = useI18n()
 

  return (
    <StyledTotalValueLockedCard>
      <CardBody>

        <Heading size="lg" mb="10px">
          {TranslateString(999, '1001 Nights Events and Timers')}
        </Heading>        
        <>      
          <Text fontSize="16px" color="#ebac00">{TranslateString(999, 'Snapshot to receive Jafar:')}</Text>
          <Text fontSize="14px" color="#ebac00">{TranslateString(999, '- Snapshot time of Iago Holder Wallets:')}</Text>
         {/*  <Timer2 /> 
          <Text fontSize="14px"color="#ebac00">{TranslateString(999, 'How to take Part?')}</Text>
          <Text fontSize="12px"color="#ebac00">{TranslateString(999, '- Buy Iago BEFORE')}</Text>
          <Text fontSize="12px"color="#ebac00">{TranslateString(999, '- Have your Iago in yor Wallet')}</Text>
          <Text fontSize="12px"color="#ebac00">{TranslateString(999, '- Staked Iago cant be recognized')}</Text>
          <br />
          <Text fontSize="14px"color="#ebac00">{TranslateString(999, 'Info:')}</Text>
          <Text fontSize="12px"color="#ebac00">{TranslateString(999, '- 1 Jafar for 5 Iago in your wallet!')}</Text>
          <Text fontSize="12px"color="#ebac00">{TranslateString(999, '- Iago can´t be Staked again! ')}</Text>
          <Text fontSize="12px"color="#ebac00">{TranslateString(999, '- If you ustake all, you can´t ')}</Text>
          <Text fontSize="12px"color="#ebac00">{TranslateString(999, '\xa0 \xa0take part in 2. GOLD earning period!')}</Text>
          <br />


          <Text fontSize="16px" color="#f5e20f">{TranslateString(999, 'GOLD earning:')}</Text>
          <Text fontSize="14px" color="#f5e20f">{TranslateString(999, '- Start of 2. Gold earning Period:')}</Text>
          <Timer3 /> 
          <Text fontSize="14px"color="#f5e20f">{TranslateString(999, 'How to take Part?')}</Text>
          <Text fontSize="12px"color="#f5e20f">{TranslateString(999, '- keep your Staking unit Timepoint!')}</Text>
          <Text fontSize="12px"color="#f5e20f">{TranslateString(999, '- Check "GOLD left to earn below TVL"')}</Text>
          <Text fontSize="12px"color="#f5e20f">{TranslateString(999, '- Harvest earnigs BEFORE no GOLD left to earn')}</Text>
          <br />
          <Text fontSize="14px"color="#f5e20f">{TranslateString(999, 'Info:')}</Text>
          <Text fontSize="12px"color="#f5e20f">{TranslateString(999, '- NO GOLD can be received if NO GOLD left!')}</Text>
  */}

        </>
      </CardBody>
    </StyledTotalValueLockedCard>
  )
}

export default InfoCard
