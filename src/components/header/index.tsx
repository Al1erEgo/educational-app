import React from 'react'

import logo from '../../assets/incubator-logo.png'
import { AuthWidget } from '../../modules/auth/modules'

import { AuthWrapper, Logo, StyledHeader } from './styles'

export const Header = () => {
  return (
    <StyledHeader>
      <Logo src={logo} />
      <AuthWrapper>
        <AuthWidget />
      </AuthWrapper>
    </StyledHeader>
  )
}
