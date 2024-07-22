import React, { useState } from 'react'

import BigNumber from 'bignumber.js'
import { Button, Flex, Heading,Text } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { useHarvest } from 'hooks/useHarvest'
import { getBalanceNumber } from 'utils/formatBalance'
import styled from 'styled-components'
import GradientButton from 'views/Home/components/GradientButton'
import useStake from '../../../../hooks/useStake'


interface FarmCardActionsProps {
  earnings?: BigNumber
  pid?: number,
  account?: string,
  canHarvest? : number,
  nextHarvestTimeStamp? : BigNumber
}

const BalanceAndCompound = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`
const Divider = styled.div`
  background-color: ${({ theme }) => theme.colors.borderColor};
  display: flex;
  height: 5px;
  margin: 10px auto;
  width: 100%;
`
const HarvestAction: React.FC<FarmCardActionsProps> = ({ earnings, pid, account, canHarvest, nextHarvestTimeStamp }) => {
  const TranslateString = useI18n()
  const [pendingTx, setPendingTx] = useState(false)
  const { onReward } = useHarvest(pid)
  const { onStake } = useStake(pid)
 
  const rawEarningsBalance = getBalanceNumber(earnings)
  const displayBalance = rawEarningsBalance.toLocaleString()
  const harvestingLockApplicable  = canHarvest >= 0 && nextHarvestTimeStamp.gt(0);
  const timeadjustment = harvestingLockApplicable ? nextHarvestTimeStamp.toNumber() *1000 : 0 ;
  const harvestLabel = harvestingLockApplicable ? `Locked till: ${new Date(timeadjustment).toLocaleString()} `: '';
  const  harvestLocked = harvestingLockApplicable ? Date.now() < timeadjustment : false;
  // debugger; // eslint-disable-line no-debugger
  
  return (
    <Flex mb='8px' justifyContent='space-between' alignItems='center'>
      <Heading color={rawEarningsBalance === 0 ? 'textDisabled' : 'text'}>{displayBalance}</Heading>
      <BalanceAndCompound>
        {pid === 99 ?
          <GradientButton
            disabled={rawEarningsBalance === 0 || pendingTx}
            size='sm'
            variant='secondary'
            marginBottom='15px'
            onClick={async () => {
              setPendingTx(true)
              await onStake(rawEarningsBalance.toString())
              setPendingTx(false)
            }}
          >
            {TranslateString(999, 'Compound')}
          </GradientButton>
          : null}
        
        <GradientButton
          disabled={(rawEarningsBalance === 0  || (pendingTx|| harvestLocked))  }
          onClick={async () => {
            setPendingTx(true)
            await onReward()
            setPendingTx(false)
          }}
        >
          { harvestLocked ?
            TranslateString(999, 'Harvest Locked')
          : TranslateString(999, 'Harvest')
        }
        </GradientButton>
        
        {(harvestingLockApplicable || rawEarningsBalance > 0) ?
        
        <Flex  justifyContent='space-between'>
        
        <Text bold textTransform="capitalize"  color={rawEarningsBalance === 0 ? 'textDisabled' :'textSubtle'} pr="0px" fontSize="12px">
        {TranslateString(999,harvestLabel)}  
        </Text> 
        
      </Flex>
       : null }
      </BalanceAndCompound>
    </Flex>
  )
}

export default HarvestAction
