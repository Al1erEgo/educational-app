import React, { FC } from 'react'

import { Button } from 'antd'

import { StyledModalButtonsContainer, StyledModalSubmitButton } from './styles'

type ModalButtonsType = {
  onSubmit?: () => void
  onCancel: () => void
  submitButtonName: string
  disabled?: boolean
}

export const ModalButtons: FC<ModalButtonsType> = ({
  onSubmit,
  onCancel,
  submitButtonName,
  disabled = true,
}) => {
  return (
    <StyledModalButtonsContainer>
      <Button onClick={onCancel}>Cancel</Button>
      <StyledModalSubmitButton disabled={disabled} onClick={onSubmit}>
        {submitButtonName}
      </StyledModalSubmitButton>
    </StyledModalButtonsContainer>
  )
}
