import React from 'react'

import { ModalPackForm } from '@/modules/cards/components'
import { StyledModalWrapper } from '@/modules/cards/styles'
import { CardsModalBaseProps, PacksModalPayloadType } from '@/modules/cards/types'

export const ModalPack = <T extends PacksModalPayloadType>({ payload, onSubmit, onCancel }: CardsModalBaseProps<T>) => {
  return (
    <StyledModalWrapper>
      <ModalPackForm payload={payload} onSubmit={onSubmit} onCancel={onCancel} />
    </StyledModalWrapper>
  )
}
