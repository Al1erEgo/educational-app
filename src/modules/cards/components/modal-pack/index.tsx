import React, { useState } from 'react'

import { StyledModalWrapper } from '../../styles'
import {
  CardsModalBaseType,
  ModalCardsFormat,
  PacksModalPayloadType,
} from '../../types'
import { getInitModalPackType } from '../../utils'
import { ModalPackForm } from '../modal-pack-form'

export const ModalPack = <T extends PacksModalPayloadType>({
  payload,
  onSubmit,
  onCancel,
}: CardsModalBaseType<T>) => {
  const [format, setFormat] = useState<ModalCardsFormat>(
    getInitModalPackType(payload)
  )

  return (
    <StyledModalWrapper>
      <ModalPackForm
        format={format}
        payload={payload}
        onSubmit={onSubmit}
        onCancel={onCancel}
      />
    </StyledModalWrapper>
  )
}
