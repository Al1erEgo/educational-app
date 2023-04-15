export enum AUTH_PATH {
  Root = '/',
  Profile = '/profile',
  SignUp = '/sign-up',
  SignIn = '/sign-in',
  ResetPassword = '/reset-password',
  NewPassword = '/set-new-password/:token',
  Error = '*',
}
