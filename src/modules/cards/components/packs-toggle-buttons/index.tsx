import { FC } from 'react'

import { Space } from 'antd'

import { StyledPacksToggleButtonWrapper, StyledToggleButton } from './styles'

import { ALL_BUTTON_NAME, MY_BUTTON_NAME } from '@/modules/cards/constants'
import { StyledCardsText } from '@/modules/cards/styles'
import { HandleToggleButtonType } from '@/modules/cards/types'

type PacksButtonsContainerProps = {
  activeButton: string
  handleToggleButton: HandleToggleButtonType
  isLoading: boolean
}
export const PacksButton: FC<PacksButtonsContainerProps> = ({
  activeButton,
  handleToggleButton,
  isLoading,
}) => {
  return (
    <StyledPacksToggleButtonWrapper>
      <StyledCardsText>Show packs</StyledCardsText>
      <Space.Compact block>
        <StyledToggleButton
          type={activeButton === MY_BUTTON_NAME ? 'primary' : 'default'}
          onClick={() => handleToggleButton(MY_BUTTON_NAME)}
          disabled={isLoading}
        >
          My
        </StyledToggleButton>
        <StyledToggleButton
          type={activeButton === ALL_BUTTON_NAME ? 'primary' : 'default'}
          onClick={() => handleToggleButton(ALL_BUTTON_NAME)}
          disabled={isLoading}
        >
          All
        </StyledToggleButton>
      </Space.Compact>
    </StyledPacksToggleButtonWrapper>
  )
}
