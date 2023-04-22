import { FC } from 'react'

import { Button, Space } from 'antd'
import styled from 'styled-components'

import { ALL_BUTTON_NAME, MY_BUTTON_NAME } from '../../../../constants'
import { StyledCardsText, StyledPacksButton } from '../../../../styles'

type PacksButtonsContainerProps = {
  activeButton: string
  setActiveButton: (buttonName: string) => void
}
export const PacksButton: FC<PacksButtonsContainerProps> = ({ activeButton, setActiveButton }) => {
  return (
    <StyledPacksButton>
      <StyledCardsText>Show packs</StyledCardsText>
      <Space.Compact block>
        <StyledButton
          type={activeButton === MY_BUTTON_NAME ? 'primary' : 'default'}
          onClick={() => setActiveButton(MY_BUTTON_NAME)}
        >
          My
        </StyledButton>
        <StyledButton
          type={activeButton === ALL_BUTTON_NAME ? 'primary' : 'default'}
          onClick={() => setActiveButton(ALL_BUTTON_NAME)}
        >
          All
        </StyledButton>
      </Space.Compact>
    </StyledPacksButton>
  )
}

const StyledButton = styled(Button)`
  width: 100px;
`
