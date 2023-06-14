import { FC } from 'react'

import { Form, Input } from 'antd'
import { Control, Controller, FieldError } from 'react-hook-form'

import { formInputs } from '@/modules/auth/constants'
import { getValidationStatus } from '@/utils'

type FormInputType = {
  name: keyof typeof formInputs
  control: Control<any>
  error?: FieldError
}

export const FormInput: FC<FormInputType> = ({ name, control, error }) => {
  const { type, placeholder, rules, autoComplete } = formInputs[name]

  const validationStatus = getValidationStatus(error)

  return (
    <Form.Item validateStatus={validationStatus} help={error?.message}>
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
    </Form.Item>
  )
}
