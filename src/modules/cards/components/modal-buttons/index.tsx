import React, { FC } from 'react'

import { Button, Form } from 'antd'

import { StyledModalButtonsContainer, StyledModalSubmitButton } from '@/modules/cards/components/modal-buttons/styles'

type ModalButtonsProps = {
  onSubmit?: () => void
  onCancel: () => void
  submitButtonName: string
  disabled?: boolean
}

export const ModalButtons: FC<ModalButtonsProps> = ({ onSubmit, onCancel, submitButtonName, disabled }) => {
  return (
    <Form.Item>
      <StyledModalButtonsContainer>
        <Button onClick={onCancel}>Cancel</Button>
        <StyledModalSubmitButton disabled={disabled} onClick={onSubmit}>
          {submitButtonName}
        </StyledModalSubmitButton>
      </StyledModalButtonsContainer>
    </Form.Item>
  )
}
