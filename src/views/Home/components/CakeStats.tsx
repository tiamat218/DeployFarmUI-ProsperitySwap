import React from 'react'
import { Image, Card, CardBody, Heading, Text, Button } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { useFarms, usePriceCakeBusd, usePriceBnbBusd } from '../../../state/hooks'

const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  border: 1px solid rgba(15, 150, 242, 0.34);
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const CakeStats = () => {

  const totalSupply = useTotalSupply();
  const burnedBalance = useBurnedBalance(getCakeAddress());
  const farms = useFarms();

  const ethPrice = usePriceBnbBusd();
  const ethhPrice = ethPrice.times(1).toFixed(2);

  

  const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0);
  const cakeSupply = getBalanceNumber(circSupply);

  const cakePrice = usePriceCakeBusd();

  const marketCap = cakePrice.times(circSupply);
  
  const cakeePrice = cakePrice.times(1).toFixed(8);




  let tokenPerSecond = 0;
  if(farms && farms[0] && farms[0].tokenPerSecond){
    tokenPerSecond = new BigNumber(farms[0].tokenPerSecond).div(new BigNumber(10).pow(18)).toNumber();
  }

  return (
    <StyledCakeStats>
      <CardBody>
        <Heading color='secondary' size="xl" mb="24px">
          Project/Token Stats
        </Heading>




        <Row>
          <Text fontSize="14px">Market Cap</Text>
          <CardValue fontSize="14px" value={getBalanceNumber(marketCap)} decimals={0} prefix="$" color="textSubtle" />
        </Row>
        <Row>
          <Text fontSize="14px">Total Minted</Text>
          {totalSupply && <CardValue fontSize="14px" value={getBalanceNumber(totalSupply)} decimals={0} color="textSubtle" />}
        </Row>
{/* 
        <Row>
          <Text fontSize="14px" color="#757245">{TranslateString(999, 'Max Adamant Transfer')}</Text>
          <CardValue fontSize="14px" value={getBalanceNumber(maxTrans)} decimals={0} color="#757245" />
        </Row>
*/}
        <Row>
          <Text fontSize="14px" color="#cc1212">Total Burned</Text>
          <CardValue fontSize="14px" value={getBalanceNumber(burnedBalance)} decimals={0} color="#cc1212" />
        </Row>
        <Row>
          <Text fontSize="14px">Circulating Supply</Text>
          <CardValue fontSize="14px" value={cakeSupply} decimals={0} color="textSubtle" />
        </Row>
        <Row>
          <Text fontSize="14px">New Token/Second</Text>
          <Text bold fontSize="14px" color="textSubtle">{tokenPerSecond}</Text>
        </Row> 
        
{/* 

        <Button
                           as="a"
                           variant="primary"
                           fullWidth
                           href="/presale"
                           target="_blank" >
                           {TranslateString(0, 'Buy GMT in Pre-Sale >')}
        </Button>

       

       <Text fontSize="14px" color="#cc1212"> RugDoc ADAMANT Review:</Text>
        
       
        <a target="blank" href='https://rugdoc.io/project/eternity-money-adamant/'> <Image src="./images/rugdoc1.png" width={340} height={110} alt="rudgroc review" /> </a>
 */}
        <br/>
        <Row>
          <Text fontSize="12px"> Current Token Price </Text>
          <Text fontSize="12px"  >$ {cakeePrice}</Text>
        </Row>   

        <br/>
        <Row>
          <Text fontSize="12px"> Current ETH Price </Text>
          <Text fontSize="12px"  >$ {ethhPrice}</Text>
        </Row>   

 

 
      </CardBody>
    </StyledCakeStats>
  )
}

export default CakeStats
