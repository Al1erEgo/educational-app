import { Form, Input } from 'antd'
import { Control, Controller, FieldError, FieldValue } from 'react-hook-form'

type ValidationRule = {
  required: boolean
}

type FormInputProps = {
  name: string
  type?: string
  control: Control<FieldValue<any>>
  rules: ValidationRule
  placeholder: string
  autoComplete: string
  error: FieldError | undefined
}

export const FormInput = ({
  name,
  type,
  control,
  rules,
  placeholder,
  autoComplete,
  error,
}: FormInputProps) => {
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
