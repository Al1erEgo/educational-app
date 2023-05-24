import React, { useState } from 'react'

import { Select } from 'antd'

import { ModalCardForm } from '@/modules/cards/components'
import { SELECT_OPTIONS } from '@/modules/cards/constants'
import { StyledModalWrapper } from '@/modules/cards/styles'
import {
  CardsModalBaseType,
  ModalCardsFormat,
  PackModalCardPayloadType,
} from '@/modules/cards/types'
import { getInitModalCardType } from '@/modules/cards/utils'

export const ModalCard = <T extends PackModalCardPayloadType>({
  payload,
  onSubmit,
  onCancel,
}: CardsModalBaseType<T>) => {
  const [format, setFormat] = useState<ModalCardsFormat>(
    getInitModalCardType(payload)
  )

  return (
    <StyledModalWrapper>
      <p>Card format:</p>
      <Select
        style={{ width: '100%' }} //StyledComponent usage brakes down onChange
        defaultValue={format}
        onChange={setFormat}
        options={SELECT_OPTIONS}
      />
      <ModalCardForm
        format={format}
        payload={payload}
        onSubmit={onSubmit}
        onCancel={onCancel}
      />
    </StyledModalWrapper>
  )
}
