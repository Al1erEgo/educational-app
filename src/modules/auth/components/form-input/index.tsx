import { FC, PropsWithChildren } from 'react'

import { Form, Input } from 'antd'
import { Control, Controller, FieldError } from 'react-hook-form'

import { inputs } from '../../constants'

type FormInputType = {
  name: keyof typeof inputs
  control: Control<any>
  error?: FieldError | undefined
}

export const FormInput: FC<PropsWithChildren<FormInputType>> = ({
  name,
  control,
  error,
  children,
}) => {
  const { type, placeholder, rules, autoComplete } = inputs[name]

  const validateStatus = error ? 'error' : ''
  const help = error ? error.message : undefined

  return (
    <Form.Item validateStatus={validateStatus} help={help}>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) =>
          type === 'password' ? (
            <Input.Password
              {...field}
              placeholder={placeholder}
              autoComplete={autoComplete}
            />
          ) : (
            <Input
              {...field}
              placeholder={placeholder}
              autoComplete={autoComplete}
            />
          )
        }
      />
    </Form.Item>
  )
}
