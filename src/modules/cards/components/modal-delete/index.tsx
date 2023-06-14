import React, { FC } from 'react'

import { ModalButtons } from '@/modules/cards/components'
import { StyledModalWrapper } from '@/modules/cards/styles'
import { CardsModalBaseProps, DeleteCardRequestType, DeletedCardsPackRequestType } from '@/modules/cards/types'

type ModalDeleteProps =
  | CardsModalBaseProps<DeletedCardsPackRequestType & { name?: string }>
  | CardsModalBaseProps<DeleteCardRequestType>
export const ModalDelete: FC<ModalDeleteProps> = ({ payload, onSubmit, onCancel, redirect }) => {
  const handleDelete = async () => {
    onCancel()
    await onSubmit(payload)
    redirect?.()
  }

  return (
    <StyledModalWrapper>
      <p>Are you sure you want to delete the {'name' in payload ? <strong>{payload.name}</strong> : 'card'}?</p>

      <ModalButtons submitButtonName={'Delete'} onSubmit={handleDelete} onCancel={onCancel} />
    </StyledModalWrapper>
  )
}
