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

export const signUpSchema = yup
  .object({
    email: emailSchema,
    password: passwordSchema,
    'confirm password': passwordSchema
      .test('passwords-match', 'Passwords must match', function (value) {
        return this.parent.password === value
      })
      .required(),
  })
  .required()

export const loginSchema = yup
  .object({
    email: emailSchema,
    password: passwordSchema,
    rememberMe: yup.boolean(),
  })
  .required()

export const resetPasswordSchema = yup.object({
  email: emailSchema,
})

export const newPasswordSchema = yup.object({
  password: passwordSchema,
})

export const useSignUpForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignUpFormInputs>({ mode: 'onBlur', resolver: yupResolver(signUpSchema) })

  return { handleSubmit, control, errors }
}

export const useLoginForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm<LoginFormInputs>({
    mode: 'onBlur',
    resolver: yupResolver(loginSchema),
    defaultValues: {
      rememberMe: false,
    },
  })

  const rememberMe = watch('rememberMe')

  return { control, handleSubmit, errors, rememberMe }
}

export const useResetPasswordForm = () => {
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<ResetPasswordFormInputs>({
    mode: 'onBlur',
    resolver: yupResolver(resetPasswordSchema),
  })

  return { handleSubmit, control, errors, watch }
}

export const useNewPasswordForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    setError,
  } = useForm<NewPasswordFormInputs>({
    mode: 'onBlur',
    resolver: yupResolver(newPasswordSchema),
  })

  return { handleSubmit, control, errors, setError }
}
