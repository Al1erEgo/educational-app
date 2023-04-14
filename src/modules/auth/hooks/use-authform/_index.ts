import { yupResolver } from '@hookform/resolvers/yup'
import { FieldValues, useForm } from 'react-hook-form'
import * as yup from 'yup'

type FormInputs = {
  email: string
  password: string
  error?: string
}

type SignUpFormInputs = FormInputs & {
  'confirm password': string
}

type LoginFormInputs = FormInputs & {
  rememberMe: boolean
}

type ResetPasswordFormInputs = Omit<FormInputs, 'password'>

type NewPasswordFormInputs = Omit<FormInputs, 'email'>

type FormType = 'signup' | 'login' | 'resetPassword' | 'newPassword'

const emailSchema = yup.string().email().required()
const passwordSchema = yup.string().min(8).required()

const commonSchema = yup.object({
  email: emailSchema,
  password: passwordSchema,
})

const schemaMap = {
  signup: commonSchema
    .shape({
      'confirm password': passwordSchema
        .test('passwords-match', 'Passwords must match', function (value) {
          return this.parent.password === value
        })
        .required(),
    })
    .required(),
  login: commonSchema
    .shape({
      rememberMe: yup.boolean().default(false),
    })
    .required(),
  resetPassword: yup.object({
    email: emailSchema,
  }),
  newPassword: yup.object({
    password: passwordSchema,
  }),
}

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

// into component
// const { handleSubmit, control, errors } = useFormWithValidation<SignUpFormInputs>('signup')
// const { handleSubmit, control, errors } = useFormWithValidation<LoginFormInputs>('login')
// const { handleSubmit, control, errors, watch } = useFormWithValidation<ResetPasswordFormInputs>('resetPassword')
// const { handleSubmit, control, setError, errors } = useFormWithValidation<NewPasswordFormInputs>('newPassword')
