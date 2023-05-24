import React, { FC } from 'react'

import { DeleteCardRequestType, DeletedCardsPackRequestType } from '../../api'
import { StyledModalWrapper } from '../../styles'
import { CardsModalBaseType } from '../../types'
import { ModalButtons } from '../modal-buttons'

type ModalDeleteType =
  | CardsModalBaseType<DeletedCardsPackRequestType & { name?: string }>
  | CardsModalBaseType<DeleteCardRequestType>
export const ModalDelete: FC<ModalDeleteType> = ({
  payload,
  onSubmit,
  onCancel,
  redirect,
}) => {
  const handleDelete = async () => {
    onCancel()
    await onSubmit(payload)
    redirect?.()
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
