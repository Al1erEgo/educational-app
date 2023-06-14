import { Form, Input } from 'antd'
import { Control, Controller, FieldError, Path } from 'react-hook-form'
import { FieldValues } from 'react-hook-form/dist/types'

type FormInputProps<T extends FieldValues> = {
  name: string
  control: Control<T, any>
  error?: FieldError
}

export const FormInput = <T extends FieldValues>({ name, control, error }: FormInputProps<T>) => {
  const capitalisedName = name.charAt(0).toUpperCase() + name.slice(1)

  return (
    <Form.Item validateStatus={error && 'error'} help={error?.message}>
      <Controller
        name={name as Path<T>}
        control={control}
        render={({ field }) =>
          name.toLowerCase().includes('password') ? (
            <Input.Password
              {...field}
              placeholder={capitalisedName === 'ConfirmPassword' ? 'Confirm password' : capitalisedName}
              autoComplete={name}
            />
          ) : (
            <Input {...field} placeholder={capitalisedName} autoComplete={name} />
          )
        }
      />
    </Form.Item>
  )
}
