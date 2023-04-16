import React from 'react'

import { Error404 } from '../../../components'
import { RoutesType } from '../../../hooks/use-cards-routes/types'
import { NewPassword } from '../new-password'
import { Profile } from '../profile'
import { ResetPassword } from '../reset-password'
import { SignIn } from '../sign-in'
import { SignUp } from '../sign-up'

import { AUTH_PATH } from './paths'

/**
An object containing the routes used for the Authentication feature in the application.
@typedef {Object} RoutesType
@property {Array} ROOT_ROUTE - An array containing a single object representing the root route of the Authentication feature.
@property {Array} MAIN_ROUTES - An array containing objects representing the main routes of the Authentication feature.
@property {Array} PRIVATE_ROUTES - An array containing objects representing the private routes of the Authentication feature, required authentication.
@property {Array} GUEST_ROUTES - An array containing objects representing the guest routes of the Authentication feature, accessible only for unauthenticated users.
@type {RoutesType}
*/
export const AUTH_ROUTES: RoutesType = {
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
