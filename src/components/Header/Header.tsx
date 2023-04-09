import React from 'react'

import logo from '../../assets/incubator-logo.png'
import { AuthWidget } from '../../modules/auth/components/auth-widget'

import { AuthWrapper, Logo, HeaderStyled } from './style'

export const Header = () => {
  return (
    <HeaderStyled>
      <Logo src={logo} />
      <AuthWrapper>
        <AuthWidget />
      </AuthWrapper>
    </HeaderStyled>
  )
}
