import { FC } from 'react'

import logo from '../../assets/incubator-logo.png'
import { AuthWidget } from '../../modules/auth/pages'

import { StyledHeader, StyledLogo, StyledAuthWrapper } from './styles'

export const Header: FC = () => {
  return (
    <StyledHeader>
      <StyledLogo src={logo} />
      <StyledAuthWrapper>
        <AuthWidget />
      </StyledAuthWrapper>
    </StyledHeader>
  )
}
