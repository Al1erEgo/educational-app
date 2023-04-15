import { Control, FieldError } from 'react-hook-form'

import { inputPropsByFieldName } from '../constants'

export type ValidationRule = {
  required?: boolean
}

export type FormInputProps = {
  name: keyof typeof inputPropsByFieldName
  type?: string
  control: Control<any>
  rules: ValidationRule
  placeholder?: string
  autoComplete?: string
  error?: FieldError | undefined
}
