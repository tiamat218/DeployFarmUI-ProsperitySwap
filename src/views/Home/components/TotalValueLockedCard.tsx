import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js/bignumber'
import { getBalanceNumber } from 'utils/formatBalance'

import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import { getCakeAddress } from 'utils/addressHelpers'
import { useTotalValue } from '../../../state/hooks'
import CardValue from './CardValue'

const StyledTotalValueLockedCard = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
  border: 1px solid rgba(15, 150, 242, 0.34);
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const TotalValueLockedCard = () => {
  
  const totalValue = useTotalValue();
  const totalSupply = useTotalSupply();
  const burnedBalance = useBurnedBalance(getCakeAddress());

  

  const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0);

  
  


  return (
    <StyledTotalValueLockedCard>
      <CardBody>

<>
<br/>
      <Row>
          <Text fontSize="14px"> Total GMT Created </Text>
          {totalSupply && <CardValue fontSize="14px" value={getBalanceNumber(totalSupply)} decimals={2} />}
        </Row>

      <Row>
          <Text fontSize="14px" color="#cc1212"> Total GMT Burned </Text>
          <CardValue fontSize="14px" color="#cc1212" value={getBalanceNumber(burnedBalance)} decimals={2} />
        </Row>

        <Row>
          <Text fontSize="14px" color="textSubtle"> Circulating Supply </Text>
          <CardValue fontSize="14px" color="textSubtle" value={getBalanceNumber(circSupply)} decimals={2} />
        </Row>
</>
        <br/>
        <br/>

        <Heading color='secondary' size="lg" mb="24px">
          Total Value in Farms
        </Heading>

               
          <CardValue value={totalValue.toNumber()} decimals={0} prefix="$ "/>          
         
        <br/>
        <br/>

        <Heading color='secondary' size="lg" mb="24px">
          Total Value in Blast Liquidity Pools
        </Heading>

            {/* TODO: value of all LPs... */}
          <CardValue value={totalValue.toNumber()} decimals={0} prefix="$ "/>          
         
        <br/>
        <br/>

      </CardBody>
    </StyledTotalValueLockedCard>
  )
}

export default TotalValueLockedCard
