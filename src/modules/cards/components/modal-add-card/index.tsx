import React, { FC } from 'react'

import { Form, Input } from 'antd'
import { Controller, useForm } from 'react-hook-form'

import { NewCardRequestType } from '../../api'
import { PackBaseModalType } from '../../types/pack-modals'
import { ModalButtons } from '../modal-buttons'

type ModalAddCardType = PackBaseModalType<NewCardRequestType>
export const ModalAddCard: FC<ModalAddCardType> = ({
  payload,
  onSubmit,
  onCancel,
}) => {
  const { handleSubmit, control } = useForm()
  const handleAddCard = (inputData: Partial<NewCardRequestType>) => {
    const submitData = { card: { ...payload.card, ...inputData } }

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
