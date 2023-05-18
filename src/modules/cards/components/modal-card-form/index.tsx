import React from 'react'

import { Form } from 'antd'

import { useModalForm } from '../../hooks'
import {
  ModalCardFormat,
  ModalCardFormDataType,
  PackModalBaseType,
  PackModalCardPayloadType,
} from '../../types/pack-modals'
import { ModalButtons } from '../modal-buttons'
import { ModalFormInput } from '../modal-form-input'
import { ModalFormUpload } from '../modal-form-upload'

type ModalCardFormType<T> = PackModalBaseType<T> & { format: ModalCardFormat }
export const ModalCardForm = <T extends PackModalCardPayloadType>({
  format,
  payload,
  onSubmit,
  onCancel,
}: ModalCardFormType<T>) => {
  const { handleSubmit, control, errors, isDirty, setError, watch } =
    useModalForm<T, ModalCardFormDataType>(format, payload)

  const handleModalFormSubmit = (inputData: ModalCardFormDataType) => {
    const submitData = {
      card: { ...payload.card, ...inputData },
    } as T

    onSubmit(submitData)
    onCancel()
  }

  //Button name depends on usage of ModalCard and type of payload
  const submitButtonName =
    'cardsPack_id' in payload.card ? 'Add card' : 'Edit card'

  return (
    <Form onFinish={handleSubmit(handleModalFormSubmit)}>
      {format === ModalCardFormat.IMG && (
        <>
          <ModalFormUpload
            name={'Question'}
            control={control}
            error={errors.questionImg}
            setError={setError}
          />
          <ModalFormUpload
            name={'Answer'}
            control={control}
            error={errors.answerImg}
            setError={setError}
          />
        </>
      )}
      {format === ModalCardFormat.TEXT && (
        <>
          <ModalFormInput
            name={'Question'}
            control={control}
            error={errors.question}
          />
          <ModalFormInput
            name={'Answer'}
            control={control}
            error={errors.answer}
          />
        </>
      )}
      <Form.Item>
        <ModalButtons
          submitButtonName={submitButtonName}
          onCancel={onCancel}
          disabled={!isDirty}
        />
      </Form.Item>
    </Form>
  )
}
