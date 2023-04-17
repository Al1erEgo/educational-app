import React from 'react'

import logo from '../../assets/incubator-logo.png'
import { AuthWidget } from '../../modules/auth/modules/auth-widget'

import { AuthWrapper, Logo, HeaderStyled } from './styles'

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
