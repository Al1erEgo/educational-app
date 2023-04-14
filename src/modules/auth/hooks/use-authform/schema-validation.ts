import * as yup from 'yup'

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
