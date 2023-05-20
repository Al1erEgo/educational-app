import React from 'react'

import { Checkbox, Form } from 'antd'
import { Control, Controller } from 'react-hook-form'

type ModalFormCheckboxType = {
  name: string
  control: Control
  defaultValue: boolean
}

export const ModalFormCheckbox: React.FC<ModalFormCheckboxType> = ({
  name,
  control,
  defaultValue,
}) => {
  return (
    <Form.Item>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
          <Checkbox
            {...field}
            checked={field.value}
            onChange={e => field.onChange(e.target.checked)}
          >
            Private Pack
          </Checkbox>
        )}
      />
    </Form.Item>
  )
}
