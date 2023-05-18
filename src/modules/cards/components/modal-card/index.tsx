import React, { useState } from 'react'

import { Select } from 'antd'

import { SELECT_OPTIONS } from '../../constants/pack-modals'
import { StyledModalWrapper } from '../../styles'
import {
  ModalCardFormat,
  PackModalBaseType,
  PackModalCardPayloadType,
} from '../../types/pack-modals'
import { getInitModalCardType } from '../../utils'
import { ModalForm } from '../modal-form'

export const ModalCard = <T extends PackModalCardPayloadType>({
  payload,
  onSubmit,
  onCancel,
}: PackModalBaseType<T>) => {
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
      <ModalForm
        format={format}
        payload={payload}
        onSubmit={onSubmit}
        onCancel={onCancel}
      />
    </StyledModalWrapper>
  )
}
