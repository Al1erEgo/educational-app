import React from 'react'

import { StyledModalWrapper } from '../../styles'
import { CardsModalBaseType, PacksModalPayloadType } from '../../types'
import { ModalPackForm } from '../modal-pack-form'

export const ModalPack = <T extends PacksModalPayloadType>({
  payload,
  onSubmit,
  onCancel,
}: CardsModalBaseType<T>) => {
  return (
    <StyledModalWrapper>
      <ModalPackForm
        payload={payload}
        onSubmit={onSubmit}
        onCancel={onCancel}
      />
    </StyledModalWrapper>
  )
}
