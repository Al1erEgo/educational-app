import { ABSOLUTE_AUTH_PATH } from './index'

import checkEmailImage from '@/assets/check-email-image.svg'
import successRegistrationImage from '@/assets/success-registration.png'

export const confirmationMessageTimeout = 5000

// TODO rename confirmationMessagesData or confirmationMessagesContent...
// TODO or remove this object at all
export const confirmationMessagesArguments = {
  resetPassword: {
    title: 'Check Email',
    redirectPath: ABSOLUTE_AUTH_PATH.SignIn,
    image: checkEmailImage,
    text: 'We’ve sent an Email with instructions to',
    timer: false,
  },
  signUp: {
    title: 'Success!',
    text: 'We’ve successfully registered you, please go through the authorization',
    redirectPath: ABSOLUTE_AUTH_PATH.SignIn,
    image: successRegistrationImage,
    timer: true,
  },
  newPassword: {
    title: 'Success!',
    text: 'Your password has been successfully changed, please go to login!',
    redirectPath: ABSOLUTE_AUTH_PATH.SignIn,
    image: successRegistrationImage,
    timer: true,
  },
} as const
