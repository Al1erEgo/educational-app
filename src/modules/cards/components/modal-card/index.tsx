import React from 'react'

import { Form } from 'antd'
import { useForm } from 'react-hook-form'

import {
  ModalCardFormType,
  PackModalBaseType,
  PackModalCardPayloadType,
} from '../../types/pack-modals'
import { ModalButtons } from '../modal-buttons'
import { ModalFormInput } from '../modal-form-input'

export const ModalCard = <T extends PackModalCardPayloadType>({
  payload,
  onSubmit,
  onCancel,
}: PackModalBaseType<T>) => {
  const { handleSubmit, control, setValue } = useForm<ModalCardFormType>({
    defaultValues: {
      question: payload?.card.question || '',
      answer: payload?.card.answer || '',
    },
  })

  const handleCardSubmit = (inputData: ModalCardFormType) => {
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
    <>
      <Form onFinish={handleSubmit(handleCardSubmit)}>
        <ModalFormInput name={'Question'} control={control} />
        <ModalFormInput name={'Answer'} control={control} />
        <Form.Item>
          <ModalButtons
            submitButtonName={submitButtonName}
            onCancel={onCancel}
          />
        </Form.Item>
      </Form>
    </>
  )
}
