import { Form, Input } from 'antd'
import { Control, Controller, FieldError } from 'react-hook-form'

import { inputs } from '../../constants'

type FormInputType = {
  name: keyof typeof inputs
  control: Control<any>
  error?: FieldError | undefined
}

export const FormInput = ({ name, control, error }: FormInputType) => {
  const { type, placeholder, rules, autoComplete } = inputs[name]

  return (
    <Form.Item validateStatus={error ? 'error' : ''} help={error?.message}>
      <>
        <Controller
          name={name}
          control={control}
          rules={rules}
          render={({ field }) =>
            type === 'password' ? (
              <Input.Password {...field} placeholder={placeholder} autoComplete={autoComplete} />
            ) : (
              <Input {...field} placeholder={placeholder} autoComplete={autoComplete} />
            )
          }
        />
      </>
    </Form.Item>
  )
}
