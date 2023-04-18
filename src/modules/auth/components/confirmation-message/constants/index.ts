import checkEmailImage from '../../../../../assets/check-email-image.svg'
import successRegistrationImage from '../../../../../assets/success-registration.png'
import { ABSOLUTE_AUTH_PATH } from '../../../constants'
import { ResetPasswordFormInputs } from '../../../hooks/use-authform/types'
import { useFormData } from '../../../hooks/use-form-data'

const [{ watch }] = useFormData<ResetPasswordFormInputs>('resetPassword')

export const confirmationMessageArguments = {
  resetPassword: {
    title: 'Check Email',
    text: `We’ve sent an Email with instructions to ${watch().email}`,
    propsPath: ABSOLUTE_AUTH_PATH.SignIn,
    image: checkEmailImage,
  },
  signUp: {
    title: 'Thank you for registering!',
    text: 'We’ve successfully registered you, please go through the authorization',
    propsPath: ABSOLUTE_AUTH_PATH.SignIn,
    image: successRegistrationImage,
    timer: true,
  },
  newPassword: {},
}
