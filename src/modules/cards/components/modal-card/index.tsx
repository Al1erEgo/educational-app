import React, { useState } from 'react'

import { Select } from 'antd'

import { ModalCardForm } from '@/modules/cards/components'
import { SELECT_OPTIONS } from '@/modules/cards/constants'
import { StyledModalWrapper } from '@/modules/cards/styles'
import { CardsModalBaseProps, ModalCardsFormat, PackModalCardPayloadType } from '@/modules/cards/types'

export const getInitModalCardType = <T extends PackModalCardPayloadType>(payload: T) =>
  payload.card?.questionImg || payload.card?.answerImg ? ModalCardsFormat.IMG : ModalCardsFormat.TEXT

export const ModalCard = <T extends PackModalCardPayloadType>({
  payload,
  onSubmit,
  onCancel,
}: CardsModalBaseProps<T>) => {
  const [format, setFormat] = useState<ModalCardsFormat>(getInitModalCardType(payload))

  return (
    <StyledModalWrapper>
      <p>Card format:</p>
      <Select
        style={{ width: '100%' }} //StyledComponent usage brakes down onChange
        defaultValue={format}
        onChange={setFormat}
        options={SELECT_OPTIONS}
      />
      <ModalCardForm format={format} payload={payload} onSubmit={onSubmit} onCancel={onCancel} />
    </StyledModalWrapper>
  )
}
