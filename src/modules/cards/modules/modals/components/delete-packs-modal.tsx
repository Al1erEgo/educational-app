import React, { FC } from 'react'

import { Button } from 'antd'

import { useModalContext } from '../hooks'

import { StyledModalButtonsWrapper, StyledModalOkButton } from './styles'

type DeleteModalProps = {
  onOk: () => void
  packName?: string
}

export const DeleteModal: FC<DeleteModalProps> = ({ onOk, packName }) => {
  const { hideModal } = useModalContext()
  const handleOk = () => {
    onOk()
    hideModal()
  }
  const handleCancel = () => {
    hideModal()
  }

  return (
    <>
      <p>
        Are you sure you want to delete the pack <strong>{packName}</strong>?
      </p>

      <StyledModalButtonsWrapper>
        <Button onClick={handleCancel}>Cancel</Button>
        <StyledModalOkButton onClick={handleOk}>Delete</StyledModalOkButton>
      </StyledModalButtonsWrapper>
    </>
  )
}
