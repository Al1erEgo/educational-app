import React from 'react'

import { Form, Input } from 'antd'
import { Controller, useForm } from 'react-hook-form'

import {
  ModalCardFormType,
  PackModalBaseType,
  PackModalCardPayloadType,
  PackModalCardType,
} from '../../types/pack-modals'
import { ModalButtons } from '../modal-buttons'

export const ModalCard = <T extends PackModalCardPayloadType>({
  payload,
  initialValues,
  onSubmit,
  onCancel,
}: PackModalBaseType<T> & PackModalCardType) => {
  const { handleSubmit, control, setValue } = useForm({
    defaultValues: {
      question: initialValues?.question || '',
      answer: initialValues?.answer || '',
    },
  })

  const handleAddCard = (inputData: ModalCardFormType) => {
    const submitData = {
      card: { ...payload.card, ...inputData },
    } as T

    onSubmit(submitData)
    onCancel()
  }

  return (
    <>
      <Form onFinish={handleSubmit(handleAddCard)}>
        <Form.Item>
          <Controller
            name={'question'}
            control={control}
            render={({ field }) => (
              <Input {...field} placeholder={'Question'} />
            )}
          />
        </Form.Item>
        <Form.Item>
          <Controller
            name={'answer'}
            control={control}
            render={({ field }) => <Input {...field} placeholder={'Answer'} />}
          />
        </Form.Item>
        <Form.Item>
          <ModalButtons submitButtonName={'Add card'} onCancel={onCancel} />
        </Form.Item>
      </Form>
    </>
  )
}
