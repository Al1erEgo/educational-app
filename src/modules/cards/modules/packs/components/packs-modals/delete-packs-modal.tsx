import React, { FC } from 'react'

import { Button } from 'antd'

import { useModalContext } from '../../../../../modal-provider/hooks'

import { StyledModalButtonsWrapper, StyledModalOkButton } from './styles'

type DeleteModalProps = {
  onOk: () => void
  packName?: string
}

export const DeleteModal: FC<DeleteModalProps> = ({ onOk, packName }) => {
  const { hideModal } = useModalContext()
  const handleSave = () => {
    onOk()
    hideModal()
  }
  const handleCancel = () => hideModal()

  return (
    <>
      <p>
        Are you sure you want to delete the pack <strong>{packName}</strong>?
      </p>

      <StyledModalButtonsWrapper>
        <Button onClick={handleCancel}>Cancel</Button>
        <StyledModalOkButton onClick={handleSave}>Delete</StyledModalOkButton>
      </StyledModalButtonsWrapper>
    </>
  )
}
