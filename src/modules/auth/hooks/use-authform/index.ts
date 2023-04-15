import { yupResolver } from '@hookform/resolvers/yup'
import { FieldValues, useForm } from 'react-hook-form'

import { schemaMap } from './constants'
import { FormType } from './types'

export const useFormWithValidation = <T extends FieldValues>(formType: FormType) => {
  const schema = schemaMap[formType]
  const {
    handleSubmit,
    control,
    formState: { errors },
    setError,
    watch,
  } = useForm<T>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  })

  return { handleSubmit, control, errors, setError, watch }
}