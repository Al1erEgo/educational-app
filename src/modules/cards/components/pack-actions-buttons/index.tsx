import { FC } from 'react'

import { Space } from 'antd'

import { StyledActionsButton } from '@/modules/cards/components/pack-actions-buttons/styles'
import { ButtonsHandlersType } from '@/modules/cards/types'

type PackActionButtonsProps = {
  isEmptyPack: boolean
  isOwnPack: boolean
  disabled: boolean
  handlers: ButtonsHandlersType
}

export const PackActionsButtons: FC<PackActionButtonsProps> = ({ isEmptyPack, isOwnPack, disabled, handlers }) => {
  const { handleAddCard, handleEditPack, handleDeletePack, handleLearnPack } = handlers

  if (!isOwnPack) {
    return (
      <StyledActionsButton disabled={isEmptyPack || disabled} onClick={handleLearnPack}>
        Learn Pack
      </StyledActionsButton>
    )
  }

  return (
    <Space.Compact>
      <StyledActionsButton disabled={disabled} onClick={handleEditPack}>
        Edit Pack
      </StyledActionsButton>
      <StyledActionsButton disabled={disabled} onClick={handleDeletePack}>
        Delete Pack
      </StyledActionsButton>
      <StyledActionsButton disabled={isEmptyPack || disabled} onClick={handleLearnPack}>
        Learn Pack
      </StyledActionsButton>
      <StyledActionsButton disabled={disabled} onClick={handleAddCard}>
        Add New Card
      </StyledActionsButton>
    </Space.Compact>
  )
}
