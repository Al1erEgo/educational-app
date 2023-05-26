import React from 'react'

import { Form } from 'antd'

import {
  ModalButtons,
  ModalFormInput,
  ModalFormUpload,
} from '@/modules/cards/components'
import { useCardsModalForm } from '@/modules/cards/hooks'
import {
  CardsModalBaseType,
  ModalCardFormDataType,
  ModalCardsFormat,
  PackModalCardPayloadType,
} from '@/modules/cards/types'

type ModalCardFormType<T> = CardsModalBaseType<T> & {
  format: ModalCardsFormat
}
export const ModalCardForm = <T extends PackModalCardPayloadType>({
  format,
  payload,
  onSubmit,
  onCancel,
}: ModalCardFormType<T>) => {
  const { handleSubmit, control, errors, isDirty, setError } =
    useCardsModalForm<T, ModalCardFormDataType>(format, payload)

  const handleModalFormSubmit = (inputData: ModalCardFormDataType) => {
    const submitData = {
      card: { ...payload.card, ...inputData },
    } as T

    onSubmit(submitData)
    onCancel()
  }

  //Button name depends on usage of ModalCard and type of payload
  const submitButtonName =
    payload.card && 'cardsPack_id' in payload.card ? 'Add card' : 'Edit card'

  return (
    <Form onFinish={handleSubmit(handleModalFormSubmit)}>
      {format === ModalCardsFormat.IMG && (
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
      {format === ModalCardsFormat.TEXT && (
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
      <ModalButtons
        submitButtonName={submitButtonName}
        onCancel={onCancel}
        disabled={!isDirty}
      />
    </Form>
  )
}
