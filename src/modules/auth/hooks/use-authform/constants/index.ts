import * as yup from 'yup'

const emailSchema = yup.string().email().required()
const passwordSchema = yup.string().min(8).required()

const commonSchema = yup.object({
  email: emailSchema,
  password: passwordSchema,
})

export const schemaMap = {
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
