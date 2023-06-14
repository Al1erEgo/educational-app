import React from 'react'

import { Checkbox, Form } from 'antd'
import { Control, Controller } from 'react-hook-form'

type ModalFormCheckboxProps = {
  name: string
  control: Control
  defaultValue: boolean
}

export const ModalFormCheckbox: React.FC<ModalFormCheckboxProps> = ({ name, control, defaultValue }) => {
  return (
    <Form.Item>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field: { value, onChange } }) => (
          <Checkbox checked={value} onChange={e => onChange(e.target.checked)}>
            Private Pack
          </Checkbox>
        )}
      />
    </Form.Item>
  )
}
