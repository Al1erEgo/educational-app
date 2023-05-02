import { FC } from 'react'

import { Checkbox, Form } from 'antd'
import { Control, Controller } from 'react-hook-form'

type FormCheckboxType = {
  name: 'rememberMe'
  control: Control<any>
}

export const FormCheckbox: FC<FormCheckboxType> = ({ name, control }) => {
  return (
    <Form.Item
      name={name}
      valuePropName="checked"
      wrapperCol={{
        offset: 0,
        span: 16,
      }}
    >
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Checkbox
            name={field.name}
            checked={field.value}
            onChange={e => field.onChange(e.target.checked)}
          >
            Remember me
          </Checkbox>
        )}
      />
    </Form.Item>
  )
}
