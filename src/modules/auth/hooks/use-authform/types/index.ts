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

export type FormType = 'signup' | 'login' | 'resetPassword' | 'newPassword'
