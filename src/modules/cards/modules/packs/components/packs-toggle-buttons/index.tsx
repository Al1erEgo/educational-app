import { FC } from 'react'

import { Space } from 'antd'

import { ALL_BUTTON_NAME, MY_BUTTON_NAME } from '../../../../constants'
import { StyledCardsText } from '../../../../styles'
import { HandleToggleButtonType } from '../../types'

import { StyledPacksToggleButtonWrapper, StyledToggleButton } from './styles'

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
