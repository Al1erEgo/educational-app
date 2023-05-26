import { FC } from 'react'

import { StyledAuthWrapper, StyledHeader, StyledLogo } from './styles'

import logo from '@/assets/incubator-logo.png'
import { AuthWidget } from '@/modules/auth/components'

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
