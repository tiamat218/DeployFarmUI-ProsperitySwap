import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Text, Image } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { useTotalValue } from '../../../state/hooks'
import GradientButton from './GradientButton'

const StyledTotalValueLockedCard = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
  border: 1px solid rgba(15, 150, 242, 0.34);
`

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Text linksbündig */
  padding: 24px;
  width: 100%;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
`

const InfoCard = () => {
  const TranslateString = useI18n()
  const totalValue = useTotalValue()

  return (
    <StyledTotalValueLockedCard>
      <CardBody>
        <CardContent>
          <Heading color='secondary' size="lg" mb="10px">
            INFO
          </Heading>
          <Text fontSize="16px" color="secondary">Global Money Token: </Text>
          <a href='https://blastscan.io/token/0xb60df4a1db61b173d0d774ffa813c3c37070e38b#code'>
            <Text fontSize="14px" color="white"> 0xb60df4a1db61b173d0d774ffa813c3c37070e38b </Text>
          </a>
          <Text fontSize="14px" color="bfbf00"> Initial Supply: 10,100 Token </Text>
          <Text fontSize="14px" color="bfbf00"> 99% to Liquidity! </Text>
          <br/>
          <Text fontSize="16px" color="secondary">Global Money Masterchef: </Text>
          <a href='https://blastscan.io/address/0x7133336A8340886F13ff35ED432F3490b4ee29DF#code'>
            <Text fontSize="14px" color="white"> 0x7133336A8340886F13ff35ED432F3490b4ee29DF </Text>
          </a>
          <Text fontSize="14px" color="bfbf00"> Emission Rate: 10 Token/Day </Text>
          <br/>
          <Text fontSize="16px" color="secondary">Global Money DEX: </Text>
          <Text fontSize="16px" color="secondary"> - Swap Router: </Text>
          <a href='https://blastscan.io/address/0x8e481ef1ae0dffc9a82dde2c24c27d1f190a04d0#code'>
            <Text fontSize="14px" color="white"> 0x8e481ef1ae0dffc9a82dde2c24c27d1f190a04d0 </Text>
          </a>
          <Text fontSize="16px" color="secondary"> - Factory: </Text>
          <a href='https://blastscan.io/address/0x88ABe497B8C45aF95090e5F27CF302849D2c9333#code'>
            <Text fontSize="14px" color="white"> 0x88ABe497B8C45aF95090e5F27CF302849D2c9333 </Text>
          </a>
          <br/>
          <Text fontSize="16px" color="bfbf00"> Constanty lowest swap fees of 0,09%! </Text>
          <br/>
          <a href='todo whitepaper link'> <Text fontSize="14px" color="secondary"> ----- </Text> </a>
          
          <ButtonWrapper>
            <GradientButton
              as="a"
              href="todo whitepaper link"
              target="_blank"
            >
              Whitepaper
            </GradientButton>
          </ButtonWrapper>
        </CardContent>
      </CardBody>
    </StyledTotalValueLockedCard>
  )
}

export default InfoCard

export {}
