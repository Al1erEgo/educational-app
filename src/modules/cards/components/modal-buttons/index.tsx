import React, { FC } from 'react'

import { Button } from 'antd'

import { StyledModalButtonsContainer, StyledModalSubmitButton } from './styles'

type ModalButtonsType = {
  onSubmit?: () => void
  onCancel: () => void
  submitButtonName: string
}

export const ModalButtons: FC<ModalButtonsType> = ({
  onSubmit,
  onCancel,
  submitButtonName,
}) => {
  return (
    <StyledModalButtonsContainer>
      <Button onClick={onCancel}>Cancel</Button>
      <StyledModalSubmitButton onClick={onSubmit}>
        {submitButtonName}
      </StyledModalSubmitButton>
    </StyledModalButtonsContainer>
  )
}
