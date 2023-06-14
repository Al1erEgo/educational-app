import { FC } from 'react'

import { StyledHeader, StyledLogo, StyledProfileWidgetWrapper } from './styles'

import logo from '@/assets/incubator-logo.png'
import { MAIN_PATH } from '@/constants'
import { useDoNavigate } from '@/hooks'
import { ProfileWidget } from '@/modules'
import { CARD_PATH } from '@/modules/cards/constants'

export const Header: FC = () => {
  const handleGoToCardsRedirect = useDoNavigate(`${MAIN_PATH.Cards}${CARD_PATH.Packs}`)

  return (
    <StyledHeader>
      <StyledLogo src={logo} onClick={handleGoToCardsRedirect} />
      <StyledProfileWidgetWrapper>
        <ProfileWidget />
      </StyledProfileWidgetWrapper>
    </StyledHeader>
  )
}
