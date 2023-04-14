import { yupResolver } from '@hookform/resolvers/yup'
import { FieldValues, useForm } from 'react-hook-form'
import * as yup from 'yup'

import {
  loginSchema,
  newPasswordSchema,
  resetPasswordSchema,
  signUpSchema,
} from './schema-validation'
import {
  LoginFormInputs,
  NewPasswordFormInputs,
  ResetPasswordFormInputs,
  SignUpFormInputs,
} from './types'

export const useFormWithValidation = <T extends FieldValues>(
  schema: yup.ObjectSchema<FieldValues>
) => {
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

export const useSignUpForm = () => {
  return useFormWithValidation<SignUpFormInputs>(signUpSchema)
}

export const useLoginForm = () => {
  return useFormWithValidation<LoginFormInputs>(loginSchema)
}

export const useResetPasswordForm = () => {
  return useFormWithValidation<ResetPasswordFormInputs>(resetPasswordSchema)
}

export const useNewPasswordForm = () => {
  return useFormWithValidation<NewPasswordFormInputs>(newPasswordSchema)
}
