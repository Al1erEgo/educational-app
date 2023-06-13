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

export type UpdateUserNameType = { name: string }

export type ConditionalFormInputsType<T> = T extends UpdateUserNameType
  ? UpdateUserNameType
  : T extends NewPasswordFormInputs
  ? NewPasswordFormInputs
  : T extends ResetPasswordFormInputs
  ? ResetPasswordFormInputs
  : T extends LoginFormInputs
  ? LoginFormInputs
  : SignUpFormInputs
