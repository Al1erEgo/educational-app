import React, { FC } from 'react'

import { DeleteCardRequestType, DeletedCardsPackRequestType } from '../../api'
import { StyledModalWrapper } from '../../styles'
import { PackModalBaseType } from '../../types/pack-modals'
import { ModalButtons } from '../modal-buttons'

type ModalDeleteType =
  | PackModalBaseType<DeletedCardsPackRequestType & { name?: string }>
  | PackModalBaseType<DeleteCardRequestType>
export const ModalDelete: FC<ModalDeleteType> = ({
  payload,
  onSubmit,
  onCancel,
}) => {
  const handleDelete = () => {
    onSubmit(payload)
    onCancel()
  }

  return (
    <StyledModalWrapper>
      <p>
        Are you sure you want to delete the{' '}
        {'name' in payload ? <strong>{payload.name}</strong> : 'card'}?
      </p>

      <ModalButtons
        submitButtonName={'Delete'}
        onSubmit={handleDelete}
        onCancel={onCancel}
      />
    </StyledModalWrapper>
  )
}
