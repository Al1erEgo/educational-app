import React, { FC } from 'react'

import {
  DeleteCardRequestType,
  DeletedCardsPackRequestType,
} from '@/modules/cards/api'
import { ModalButtons } from '@/modules/cards/components'
import { StyledModalWrapper } from '@/modules/cards/styles'
import { CardsModalBaseType } from '@/modules/cards/types'

type ModalDeleteType =
  | CardsModalBaseType<DeletedCardsPackRequestType & { name?: string }>
  | CardsModalBaseType<DeleteCardRequestType>
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
