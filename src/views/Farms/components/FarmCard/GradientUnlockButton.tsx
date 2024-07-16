import React from 'react'
import { Button, useWalletModal } from '@pancakeswap-libs/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import useI18n from 'hooks/useI18n'
import styled from 'styled-components'

const GradientButton = styled(Button)`
  background: linear-gradient(45deg, #54108A 0%, #ffa500 100%);
  background-size: 200% 200%;
  border: none;
  color: white;
  font-size: 16px;
  font-weight: 600;
  padding: 16px 24px;
  border-radius: 8px;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.2);
  transition: all 0.4s ease;
  position: relative;
  z-index: 1;

  &:hover {
    background-position: 100% 0;
    box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.4);
  }

  &:active {
    background-position: 100% 0;
    box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.6);
  }

  &:disabled {
    background: linear-gradient(90deg, #cccccc 0%, #999999 100%);
    box-shadow: none;
    cursor: not-allowed;
  }
`

const GradientUnlockButton = (props) => {
  const TranslateString = useI18n()
  const { connect, reset } = useWallet()
  const { onPresentConnectModal } = useWalletModal(connect, reset)

  return (
    <GradientButton onClick={onPresentConnectModal} {...props}>
      {TranslateString(292, 'Unlock Wallet')}
    </GradientButton>
  )
}

export default GradientUnlockButton
