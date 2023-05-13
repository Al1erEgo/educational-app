import { FC } from 'react'

import { Space } from 'antd'

import { ButtonsHandlersType } from '../../types'

import { StyledActionsButton } from './styles'

type PackActionButtonsType = {
  isEmptyPack: boolean
  isOwnPack: boolean
  disabled: boolean
  handlers: ButtonsHandlersType
}

export const PackActionsButtons: FC<PackActionButtonsType> = ({
  isEmptyPack,
  isOwnPack,
  disabled,
  handlers,
}) => {
  const { handleAddCard, handleEditPack, handleDeletePack, handleLearnPack } =
    handlers

  if (!isOwnPack) {
    return (
      <StyledActionsButton
        disabled={isEmptyPack || disabled}
        onClick={handleLearnPack}
      >
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
      <StyledActionsButton
        disabled={isEmptyPack || disabled}
        onClick={handleLearnPack}
      >
        Learn Pack
      </StyledActionsButton>
      <StyledActionsButton disabled={disabled} onClick={handleAddCard}>
        Add New Card
      </StyledActionsButton>
    </Space.Compact>
  )
}
