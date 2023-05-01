import React from 'react'

import logo from '../../assets/incubator-logo.png'
import { AuthWidget } from '../../modules/auth/modules'

import { StyledHeader, StyledLogo, StyledAuthWrapper } from './styles'

export const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo src={logo} />
      <StyledAuthWrapper>
        <AuthWidget />
      </StyledAuthWrapper>
    </StyledHeader>
  )
}
