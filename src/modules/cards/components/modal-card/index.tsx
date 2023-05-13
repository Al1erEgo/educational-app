import React, { FC } from 'react'

import { Form, Input } from 'antd'
import { Controller, useForm } from 'react-hook-form'

import { NewCardRequestType, UpdateCardRequestType } from '../../api'
import { ModalCardFormType, PackBaseModalType } from '../../types/pack-modals'
import { ModalButtons } from '../modal-buttons'

type ModalCardType = PackBaseModalType<
  NewCardRequestType | UpdateCardRequestType
>
export const ModalCard: FC<ModalCardType> = ({
  payload,
  onSubmit,
  onCancel,
}) => {
  const { handleSubmit, control, setValue } = useForm({
    defaultValues: {
      question: '',
      answer: '',
    },
  })

  const handleAddCard = (inputData: ModalCardFormType) => {
    const submitData = {
      card: { ...payload.card, ...inputData },
    }

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
