import { Form, Input } from 'antd'
import { Control, Controller, FieldError } from 'react-hook-form'

import { SignUpFormInputs } from '../../sign-up'

type ValidationRule = {
  required: boolean
}

type FormInputProps = {
  name: keyof typeof inputPropsByFieldName
  type?: string
  control: Control<SignUpFormInputs>
  rules: ValidationRule
  placeholder: string
  autoComplete: string
  error: FieldError | undefined
}

const inputPropsByFieldName = {
  email: {
    type: undefined,
    placeholder: 'Email',
  },
  password: {
    type: 'password',
    placeholder: 'Password',
  },
  'confirm password': {
    type: 'password',
    placeholder: 'Confirm password',
  },
  error: {
    type: undefined,
    placeholder: '',
  },
}

export const FormInput = ({ name, control, rules, autoComplete, error }: FormInputProps) => {
  const { type, placeholder } = inputPropsByFieldName[name]

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
