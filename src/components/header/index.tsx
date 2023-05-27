import { FC } from 'react'

import { StyledHeader, StyledLogo, StyledProfileWidgetWrapper} from './styles'

import logo from '@/assets/incubator-logo.png'
import { ProfileWidget } from '@/modules/auth/components'

export const Header: FC = () => {
  return (
    <StyledHeader>
      <StyledLogo src={logo} />
      <StyledProfileWidgetWrapper>
        <ProfileWidget />
      </StyledProfileWidgetWrapper>
    </StyledHeader>
  )
}
