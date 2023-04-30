import checkEmailImage from '../../../../../assets/check-email-image.svg'
import successRegistrationImage from '../../../../../assets/success-registration.png'
import { ABSOLUTE_AUTH_PATH } from '../../../constants'

//TODO переделать типы и нэйминг

type ConfirmationMessageArgumentsType = {
  resetPassword: ConfirmationMessagePropsType
  signUp: ConfirmationMessagePropsType
  newPassword: ConfirmationMessagePropsType
}

type ConfirmationMessagePropsType = {
  title: string
  propsPath: string
  text: string
  image?: string
  timer?: boolean
}

export const confirmationMessageArguments: ConfirmationMessageArgumentsType = {
  resetPassword: {
    title: 'Check Email',
    propsPath: ABSOLUTE_AUTH_PATH.SignIn,
    image: checkEmailImage,
    text: 'We’ve sent an Email with instructions to',
  } as const,
  signUp: {
    title: 'Success!',
    text: 'We’ve successfully registered you, please go through the authorization',
    propsPath: ABSOLUTE_AUTH_PATH.SignIn,
    image: successRegistrationImage,
    timer: true,
  } as const,
  newPassword: {
    title: 'Success!',
    text: 'Your password has been successfully changed, please go to login!',
    propsPath: ABSOLUTE_AUTH_PATH.SignIn,
    image: successRegistrationImage,
    timer: true,
  } as const,
}
