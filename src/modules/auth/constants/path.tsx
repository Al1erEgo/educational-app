import React from 'react'

import { Error404 } from '../../../components/error404'
import { NewPassword } from '../new-password'
import { Profile } from '../profile'
import { ResetPassword } from '../reset-password'
import { SignIn } from '../sign-in'
import { SignUp } from '../sign-up'

export enum AUTH_PATH {
  Root = '/',
  Profile = '/profile',
  SignUp = '/sign-up',
  SignIn = '/sign-in',
  ResetPassword = '/reset-password',
  NewPassword = '/set-new-password/:token',
  Error = '*',
}

export const AUTH_ROUTES = {
  ROOT_ROUTE: [{ path: AUTH_PATH.Root }],
  PRIVATE_ROUTES: [{ path: AUTH_PATH.Profile, element: <Profile /> }],
  GUEST_ROUTES: [
    { path: AUTH_PATH.SignIn, element: <SignIn /> },
    { path: AUTH_PATH.SignUp, element: <SignUp /> },
    { path: AUTH_PATH.NewPassword, element: <NewPassword /> },
    { path: AUTH_PATH.ResetPassword, element: <ResetPassword /> },
    { path: AUTH_PATH.Error, element: <Error404 /> },
  ],
} as const
