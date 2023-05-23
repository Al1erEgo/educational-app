import React from 'react'

import { Form } from 'antd'

import { MODAL_PACK_FORMAT } from '../../constants'
import { useCardsModalForm } from '../../hooks'
import { StyledModalWrapper } from '../../styles'
import {
  CardsModalBaseType,
  ModalCardsFormat,
  ModalPackFormDataType,
  PacksModalPayloadType,
} from '../../types'
import { ModalButtons, ModalFormInput, ModalFormUpload } from '../index'
import { ModalFormCheckbox } from '../modal-form-checkbox'

type ModalPackFormType<T> = CardsModalBaseType<T> & {
  format: ModalCardsFormat
}

export const ModalPackForm = <T extends PacksModalPayloadType>({
  format = MODAL_PACK_FORMAT,
  payload,
  onSubmit,
  onCancel,
}: ModalPackFormType<T>) => {
  const { handleSubmit, control, errors, isDirty, setError, watch } =
    useCardsModalForm<T, ModalPackFormDataType>(format, payload)

  const handlePackSubmit = (inputData: ModalPackFormDataType) => {
    const submitData = {
      cardsPack: { ...payload.cardsPack, ...inputData },
    } as T

    onSubmit(submitData)
    onCancel()
  }

  const submitButtonName =
    payload.cardsPack && '_id' in payload.cardsPack ? 'Edit pack' : 'Add pack'

  return (
    <StyledModalWrapper>
      <Form onFinish={handleSubmit(handlePackSubmit)}>
        <ModalFormUpload
          name="Cover"
          control={control}
          error={errors.deckCover}
          setError={setError}
        />
        <ModalFormInput name={'Name'} control={control} error={errors.name} />

        <ModalFormCheckbox
          name="private"
          control={control}
          defaultValue={payload.cardsPack?.private || false}
        />

        <ModalButtons
          submitButtonName={submitButtonName}
          onCancel={onCancel}
          disabled={!isDirty}
        />
      </Form>
    </StyledModalWrapper>
  )
}
