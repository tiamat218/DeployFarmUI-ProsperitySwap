import React from 'react'
import styled from 'styled-components'
import { Button } from '@pancakeswap-libs/uikit'

const GradientButton = styled(Button)`
  background: linear-gradient(45deg, #30D5C8 0%, #54108A 100%);
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

const withGradientButtonStyle = (WrappedComponent) => {
  return (props) => <GradientButton as={WrappedComponent} {...props} />
}

export default withGradientButtonStyle
