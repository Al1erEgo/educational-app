import { FC } from 'react'

import { Space } from 'antd'

import { ButtonsHandlersType } from '../../types'

import { StyledActionsButton } from './styles'

type PackActionButtonsType = {
  isEmptyPack: boolean
  isOwnPack: boolean
  handlers: ButtonsHandlersType
}

export const PackActionsButtons: FC<PackActionButtonsType> = ({
  isEmptyPack,
  isOwnPack,
  handlers,
}) => {
  const { handleAddCard, handleEditPack, handleDeletePack, handleLearnPack } = handlers

  if (!isOwnPack) {
    return <StyledActionsButton onClick={handleLearnPack}>Learn Pack</StyledActionsButton>
  }

  return (
    <Space.Compact>
      <StyledActionsButton onClick={handleEditPack}>Edit Pack</StyledActionsButton>
      <StyledActionsButton onClick={handleDeletePack}>Delete Pack</StyledActionsButton>
      <StyledActionsButton disabled={isEmptyPack} onClick={handleLearnPack}>
        Learn Pack
      </StyledActionsButton>
      <StyledActionsButton onClick={handleAddCard}>Add New Card</StyledActionsButton>
    </Space.Compact>
  )
}
