import * as yup from 'yup'

export const emailSchema = yup
  .string()
  .email('Email must be a valid email')
  .max(64, 'Email must be at most 64 characters')
  .required('Email is a required field')
export const passwordSchema = yup
  .string()
  .min(8, 'Password must be at least 8 characters')
  .max(64, 'Password must be at most 64 characters')
  .required('Password is a required field')
export const nameSchema = yup
  .string()
  .min(1, 'Name must be at least 1 characters')
  .max(48, 'Name must be at most 48 characters')
  .required('Name is a required field')
export const rememberMeSchema = yup.boolean().default(false)

export const confirmPasswordSchema = passwordSchema
  .test('passwords-match', 'Passwords must match', function (value) {
    return this.parent.password === value
  })
  .required('Confirm password is a required field')
