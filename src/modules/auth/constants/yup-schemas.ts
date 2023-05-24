import * as yup from 'yup'

const emailSchema = yup.string().email().required()
const passwordSchema = yup.string().min(8).required()
const nameSchema = yup.string().min(1).max(48).required()
const rememberMeSchema = yup.boolean().default(false)

const commonSchema = yup.object({
  email: emailSchema,
  password: passwordSchema,
})

export const schemaMap = {
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
