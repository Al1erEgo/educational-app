import { FC } from 'react'

import { Space } from 'antd'

import { ButtonsHandlersType } from '../../hooks'

import { StyledActionsButton } from './styles'

type PackActionButtonsType = {
  isOwnPack: boolean
  handlers: ButtonsHandlersType
}

export const PackActionButtons: FC<PackActionButtonsType> = ({ isOwnPack, handlers }) => {
  const { handleAddCard, handleEditPack, handleDeletePack } = handlers

  if (!isOwnPack) {
    return <StyledActionsButton>Learn pack</StyledActionsButton>
  }

  return (
    <Space.Compact>
      <StyledActionsButton onClick={handleEditPack}>Edit</StyledActionsButton>
      <StyledActionsButton onClick={handleDeletePack}>Delete</StyledActionsButton>
      <StyledActionsButton>Learn</StyledActionsButton>
      <StyledActionsButton onClick={handleAddCard}>Add new card</StyledActionsButton>
    </Space.Compact>
  )
}
