import * as yup from 'yup'

export const emailSchema = yup.string().email().max(64).required()
export const passwordSchema = yup.string().min(8).max(64).required()
export const nameSchema = yup
  .string()
  .min(1, 'Name must be at least 1 characters')
  .max(48, 'Name must be at most 48 characters')
  .required()
export const rememberMeSchema = yup.boolean().default(false)

export const confirmPasswordSchema = passwordSchema
  .test('passwords-match', 'Passwords must match', function (value) {
    return this.parent.password === value
  })
  .required()

const commonSchema = yup.object({
  email: emailSchema,
  password: passwordSchema,
})

export const formSchemaMap = {
  updateUserName: yup
    .object({
      name: nameSchema,
    })
    .required(),
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
      rememberMe: rememberMeSchema,
    })
    .required(),
  resetPassword: yup.object({
    email: emailSchema,
  }),
  newPassword: yup.object({
    password: passwordSchema,
  }),
}
