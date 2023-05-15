import React, { FC } from 'react'

import { DeletedCardsPackRequestType } from '../../../../api'
import { ModalButtons } from '../../../../components'
import { StyledModalWrapper } from '../../../../styles'
import { PacksModalBaseType } from '../../types/packs-modals'

type ModalDeleteType = PacksModalBaseType<DeletedCardsPackRequestType>
export const ModalsDelete: FC<ModalDeleteType> = ({
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
      <p>Are you sure you want to delete the card?</p>

      <ModalButtons
        submitButtonName={'Delete'}
        onSubmit={handleDelete}
        onCancel={onCancel}
      />
    </StyledModalWrapper>
  )
}
