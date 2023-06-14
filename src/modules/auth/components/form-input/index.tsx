import { Form, Input } from 'antd'
import { Control, Controller, FieldError, Path } from 'react-hook-form'
import { FieldValues } from 'react-hook-form/dist/types'

import { formInputs } from '@/modules/auth/constants'

type FormInputProps<T extends FieldValues> = {
  name: keyof typeof formInputs
  control: Control<T, any>
  error?: FieldError
}

export const FormInput = <T extends FieldValues>({ name, control, error }: FormInputProps<T>) => {
  const { type, placeholder, rules, autoComplete } = formInputs[name]

  return (
    <Form.Item validateStatus={error && 'error'} help={error?.message}>
      <Controller
        name={name as Path<T>}
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
