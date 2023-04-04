import React from 'react'

import logo from '../../assets/incubator-logo.png'

import { AuthWrapper, Logo, HeaderStyled } from './style'

export const Header = () => {
  return (
    <HeaderStyled>
      <Logo src={logo} />
      <AuthWrapper></AuthWrapper>
    </HeaderStyled>
  )
}
