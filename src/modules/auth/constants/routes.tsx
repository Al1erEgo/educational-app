import React from 'react'

import { Error404 } from '../../../components/error404'
import { NewPassword } from '../new-password'
import { Profile } from '../profile'
import { ResetPassword } from '../reset-password'
import { SignIn } from '../sign-in'
import { SignUp } from '../sign-up'

import { AUTH_PATH } from './path'

export const AUTH_ROUTES = {
  ROOT_ROUTE: [{ path: AUTH_PATH.Root }],
  MAIN_ROUTES: [{ path: AUTH_PATH.Error, element: <Error404 /> }],
  PRIVATE_ROUTES: [{ path: AUTH_PATH.Profile, element: <Profile /> }],
  GUEST_ROUTES: [
    { path: AUTH_PATH.SignIn, element: <SignIn /> },
    { path: AUTH_PATH.SignUp, element: <SignUp /> },
    { path: AUTH_PATH.NewPassword, element: <NewPassword /> },
    { path: AUTH_PATH.ResetPassword, element: <ResetPassword /> },
  ],
} as const
