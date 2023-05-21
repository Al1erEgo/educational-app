import { FC } from 'react'

import { Checkbox, Form } from 'antd'
import { Control, Controller } from 'react-hook-form'

type FormCheckboxType = {
  name: string
  control: Control
  defaultValue: boolean
}

export const FormCheckbox: FC<FormCheckboxType> = ({
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
        render={({ field: { value, onChange } }) => (
          <Checkbox checked={value} onChange={e => onChange(e.target.checked)}>
            Remember me
          </Checkbox>
        )}
      />
    </Form.Item>
  )
}
