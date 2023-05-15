import React, { FC } from 'react'

import { Form, Input } from 'antd'
import { Control, Controller } from 'react-hook-form'

type ModalFormInputType = {
  name: string
  control: Control
  error?: any
}

export const ModalFormInput: FC<ModalFormInputType> = ({
  name,
  control,
  error,
}) => {
  return (
    <Form.Item validateStatus={error ? 'error' : ''} help={error?.message}>
      <p>{name}:</p>
      <Controller
        name={name.toLowerCase()}
        control={control}
        render={({ field }) => <Input {...field} />}
      />
    </Form.Item>
  )
}
