import React, { useState } from 'react'

import { Select } from 'antd'

import { SELECT_PACK_OPTIONS } from '../../constants'
import { StyledModalWrapper } from '../../styles'
import {
  CardsModalBaseType,
  ModalCardsFormat,
  PackModalCardPayloadType,
  PacksModalPayloadType,
} from '../../types'
import { getInitModalPackType } from '../../utils'
import { ModalPackForm } from '../modal-pack-form'

export const ModalPack = <
  T extends PackModalCardPayloadType & PacksModalPayloadType
>({
  payload,
  onSubmit,
  onCancel,
}: CardsModalBaseType<T>) => {
  const [format, setFormat] = useState<ModalCardsFormat>(
    getInitModalPackType(payload)
  )

  return (
    <StyledModalWrapper>
      <p>Pack format:</p>
      <Select
        style={{ width: '100%' }} //StyledComponent usage brakes down onChange
        defaultValue={format}
        onChange={setFormat}
        options={SELECT_PACK_OPTIONS}
      />
      <ModalPackForm
        format={format}
        payload={payload}
        onSubmit={onSubmit}
        onCancel={onCancel}
      />
    </StyledModalWrapper>
  )
}
