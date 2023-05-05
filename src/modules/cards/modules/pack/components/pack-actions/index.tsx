import { FC } from 'react'

import { Space } from 'antd'

import { ButtonsHandlersType } from '../../types'

import { StyledActionsButton } from './styles'

type PackActionButtonsType = {
  isOwnPack: boolean
  handlers: ButtonsHandlersType
}

export const PackActionsButtons: FC<PackActionButtonsType> = ({ isOwnPack, handlers }) => {
  const { handleAddCard, handleEditPack, handleDeletePack, handleLearnPack } = handlers

  if (!isOwnPack) {
    return <StyledActionsButton onClick={handleLearnPack}>Learn Pack</StyledActionsButton>
  }

  return (
    <Space.Compact>
      <StyledActionsButton onClick={handleEditPack}>Edit Pack</StyledActionsButton>
      <StyledActionsButton onClick={handleDeletePack}>Delete Pack</StyledActionsButton>
      <StyledActionsButton onClick={handleLearnPack}>Learn Pack</StyledActionsButton>
      <StyledActionsButton onClick={handleAddCard}>Add New Card</StyledActionsButton>
    </Space.Compact>
  )
}
