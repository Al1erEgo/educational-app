import { FC } from 'react'

import { Space } from 'antd'

import { StyledPacksToggleButtonWrapper, StyledToggleButton } from './styles'

import { StyledCardsText } from '@/modules/cards/styles'
import { HandleToggleButtonType } from '@/modules/cards/types'

type PacksButtonsProps = {
  activeButton: string
  handleToggleButton: HandleToggleButtonType
  isLoading: boolean
}

const MY_BUTTON_NAME = 'My'
const ALL_BUTTON_NAME = 'All'

export const PacksButton: FC<PacksButtonsProps> = ({ activeButton, handleToggleButton, isLoading }) => {
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
