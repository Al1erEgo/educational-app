import React, { FC } from 'react'

import { StyledName, StyledUserIconWidget, StyledWrapper } from './styles'

type WidgetProfileDataType = {
  userName: string | undefined
  onClick: () => void
}

export const WidgetProfileData: FC<WidgetProfileDataType> = ({ onClick, userName }) => {
  return (
    <StyledWrapper onClick={onClick}>
      <StyledName>{userName}</StyledName>
      <StyledUserIconWidget />
    </StyledWrapper>
  )
}
