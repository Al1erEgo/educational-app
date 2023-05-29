import * as yup from 'yup'

const emailSchema = yup.string().email().max(64).required()
const passwordSchema = yup.string().min(8).max(64).required()
const nameSchema = yup
  .string()
  .min(1, 'Name must be at least 1 characters')
  .max(48, 'Name must be at most 48 characters')
  .required()
const rememberMeSchema = yup.boolean().default(false)

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
