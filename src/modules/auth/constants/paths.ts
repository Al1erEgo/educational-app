import { MAIN_PATH } from '../../../constants'

export enum AUTH_PATH {
  Root = '/',
  Profile = '/profile',
  SignUp = '/sign-up',
  SignIn = '/sign-in',
  ResetPassword = '/reset-password',
  NewPassword = '/set-new-password/:token',
  Error = '*',
}

export const ABSOLUTE_AUTH_PATH = {
  Profile: `${MAIN_PATH.Auth}${AUTH_PATH.Profile}`,
  SignUp: `${MAIN_PATH.Auth}${AUTH_PATH.SignUp}`,
  SignIn: `${MAIN_PATH.Auth}${AUTH_PATH.SignIn}`,
  ResetPassword: `${MAIN_PATH.Auth}${AUTH_PATH.ResetPassword}`,
}
