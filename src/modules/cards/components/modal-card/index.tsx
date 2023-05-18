import React, { useState } from 'react'

import { Select } from 'antd'

import { SELECT_OPTIONS } from '../../constants'
import { StyledModalWrapper } from '../../styles'
import {
  CardsModalBaseType,
  ModalCardFormat,
  PackModalCardPayloadType,
} from '../../types'
import { getInitModalCardType } from '../../utils'
import { ModalCardForm } from '../modal-card-form'

export const ModalCard = <T extends PackModalCardPayloadType>({
  payload,
  onSubmit,
  onCancel,
}: CardsModalBaseType<T>) => {
  const [format, setFormat] = useState<ModalCardFormat>(
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
