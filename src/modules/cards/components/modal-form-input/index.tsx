import React, { FC } from 'react'

import { Form, Input } from 'antd'
import { Control, Controller } from 'react-hook-form'

type ModalFormInputType = {
  name: string
  control: Control
}

export const ModalFormInput: FC<ModalFormInputType> = ({ name, control }) => {
  return (
    <Form.Item>
      <p>{name}:</p>
      <Controller
        name={name.toLowerCase()}
        control={control}
        render={({ field }) => <Input.TextArea {...field} />}
      />
    </Form.Item>
  )
}
