import React, { FC } from 'react'

import { Button } from 'antd'

import {
  StyledModalButtonsWrapper,
  StyledModalOkButton,
} from '../../modules/packs/components/packs-modals/styles'
import {
  PackModalsOnSubmitType,
  PackModalsPayloadType,
} from '../../types/pack-modals'

type ModalDeleteType = {
  payload: PackModalsPayloadType
  onSubmit: PackModalsOnSubmitType
  onCancel: () => void
}
export const ModalDelete: FC<ModalDeleteType> = ({
  payload,
  onSubmit,
  onCancel,
}) => {
  const handleSubmit = () => {
    onSubmit(payload)
    onCancel()
  }

  return (
    <>
      <p>Are you sure you want to delete the card?</p>

      <StyledModalButtonsWrapper>
        <Button onClick={onCancel}>Cancel</Button>
        <StyledModalOkButton onClick={handleSubmit}>Delete</StyledModalOkButton>
      </StyledModalButtonsWrapper>
    </>
  )
}
