import React from 'react'

import { Form } from 'antd'

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
  format,
  payload,
  onSubmit,
  onCancel,
}: ModalPackFormType<T>) => {
  const { handleSubmit, control, errors, isDirty, setError, watch } =
    useCardsModalForm<T, ModalPackFormDataType>(format, payload)

  console.log('payload', payload)
  console.log('format', format)

  const handlePackSubmit = (inputData: ModalPackFormDataType) => {
    debugger
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
        {format === ModalCardsFormat.IMGPACK && (
          <>
            <ModalFormUpload
              name="Cover"
              control={control}
              error={errors.deckCover}
              setError={setError}
            />
            <ModalFormInput
              name={'Name'}
              control={control}
              error={errors.name}
            />
          </>
        )}
        {format === ModalCardsFormat.TEXTPACK && (
          <ModalFormInput name={'Name'} control={control} error={errors.name} />
        )}

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
