import { FC } from 'react'

import { Space } from 'antd'

import { StyledCardText, StyledPacksButton } from '../../../../styles'

import { ButtonGroup } from './button-group'

type PacksButtonsContainerProps = {
  activeButton: string
  setActiveButton: (buttonName: string) => void
}
export const PacksButton: FC<PacksButtonsContainerProps> = ({ activeButton, setActiveButton }) => {
  const handleShowPacks = (buttonName: string) => {
    setActiveButton(buttonName)
  }

  return (
    <StyledPacksButton>
      <StyledCardText>Show packs</StyledCardText>
      <Space.Compact block>
        <ButtonGroup text="My" isActive={activeButton === 'My'} onClick={handleShowPacks} />
        <ButtonGroup text="All" isActive={activeButton === 'All'} onClick={handleShowPacks} />
      </Space.Compact>
    </StyledPacksButton>
  )
}
