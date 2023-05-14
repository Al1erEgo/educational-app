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
      <Controller
        name={name.toLowerCase()}
        control={control}
        render={({ field }) => <Input {...field} placeholder={name} />}
      />
    </Form.Item>
  )
}
