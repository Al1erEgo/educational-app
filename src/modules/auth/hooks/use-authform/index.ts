import { yupResolver } from '@hookform/resolvers/yup'
import { FieldValues, useForm } from 'react-hook-form'
import * as yup from 'yup'

type FormInputs = {
  email: string
  password: string
  error?: string
}

export type SignUpFormInputs = FormInputs & {
  'confirm password': string
}

export type LoginFormInputs = FormInputs & {
  rememberMe: boolean
}

export type ResetPasswordFormInputs = Omit<FormInputs, 'password'>

export type NewPasswordFormInputs = Omit<FormInputs, 'email'>

const emailSchema = yup.string().email().required()
const passwordSchema = yup.string().min(8).required()

const commonSchema = yup.object({
  email: emailSchema,
  password: passwordSchema,
})

export const signUpSchema = commonSchema
  .shape({
    'confirm password': passwordSchema
      .test('passwords-match', 'Passwords must match', function (value) {
        return this.parent.password === value
      })
      .required(),
  })
  .required()

export const loginSchema = commonSchema
  .shape({
    rememberMe: yup.boolean().default(false),
  })
  .required()

export const resetPasswordSchema = yup.object({
  email: emailSchema,
})

export const newPasswordSchema = yup.object({
  password: passwordSchema,
})

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
