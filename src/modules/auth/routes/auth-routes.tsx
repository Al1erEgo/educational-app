import React from 'react'

import { Navigate, Route, Routes, useResolvedPath } from 'react-router-dom'

import { NewPasswordPage, ProfilePage, ResetPasswordPage, SignInPage, SignUpPage } from '../pages'

import { AuthProvider, GuestProvider } from '@/modules/auth/components'
import { AUTH_PATH } from '@/modules/auth/constants'
import { Error404Page } from '@/pages'

export const AuthRoutes = () => {
  const path = useResolvedPath('')

  return (
    <Routes>
      <Route path={AUTH_PATH.Root} element={<Navigate to={`${path.pathname}${AUTH_PATH.Profile}`} />} />
      <Route element={<AuthProvider />}>
        <Route path={AUTH_PATH.Profile} element={<ProfilePage />} />
      </Route>
      <Route element={<GuestProvider />}>
        <Route path={AUTH_PATH.SignIn} element={<SignInPage />} />
        <Route path={AUTH_PATH.SignUp} element={<SignUpPage />} />
        <Route path={AUTH_PATH.NewPassword} element={<NewPasswordPage />} />
        <Route path={AUTH_PATH.ResetPassword} element={<ResetPasswordPage />} />
      </Route>
      <Route path={AUTH_PATH.Error} element={<Error404Page />} />
    </Routes>
  )
}
