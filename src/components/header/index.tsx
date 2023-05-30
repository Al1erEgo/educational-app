import { FC } from 'react'

import { StyledHeader, StyledLogo, StyledProfileWidgetWrapper } from './styles'

import logo from '@/assets/incubator-logo.png'
import { useNavigateHandler } from '@/hooks'
import { ProfileWidget } from '@/modules/auth/components'
import { ABSOLUTE_CARD_PATH } from '@/modules/cards/constants'

export const Header: FC = () => {
  const handleGoToCardsRedirect = useNavigateHandler(ABSOLUTE_CARD_PATH.Packs)

  return (
    <StyledHeader>
      <StyledLogo src={logo} onClick={handleGoToCardsRedirect} />
      <StyledProfileWidgetWrapper>
        <ProfileWidget />
      </StyledProfileWidgetWrapper>
    </StyledHeader>
  )
}
