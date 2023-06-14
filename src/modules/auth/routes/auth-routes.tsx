import React from 'react'

import { Navigate, Route, Routes, useResolvedPath } from 'react-router-dom'

import { NewPassword, Profile, ResetPassword, SignIn, SignUp } from '../pages'

import { AuthProvider, GuestProvider } from '@/modules/auth/components'
import { AUTH_PATH } from '@/modules/auth/constants'
import { Error404 } from '@/pages'

export const AuthRoutes = () => {
  const path = useResolvedPath('')

  return (
    <Routes>
      <Route path={AUTH_PATH.Root} element={<Navigate to={`${path.pathname}${AUTH_PATH.Profile}`} />} />
      <Route element={<AuthProvider />}>
        <Route path={AUTH_PATH.Profile} element={<Profile />} />
      </Route>
      <Route element={<GuestProvider />}>
        <Route path={AUTH_PATH.SignIn} element={<SignIn />} />
        <Route path={AUTH_PATH.SignUp} element={<SignUp />} />
        <Route path={AUTH_PATH.NewPassword} element={<NewPassword />} />
        <Route path={AUTH_PATH.ResetPassword} element={<ResetPassword />} />
      </Route>
      <Route path={AUTH_PATH.Error} element={<Error404 />} />
    </Routes>
  )
}
