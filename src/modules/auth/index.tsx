import React, { ReactNode } from 'react'

import { Navigate, Route, Routes, useResolvedPath } from 'react-router-dom'

import { Error404 } from '../../pages/error404'

import { AUTH_PATH } from './constants'
import { NewPassword } from './newPassword'
import { Profile } from './profile'
import { ResetPassword } from './resetPassword'
import { SignIn } from './signIn'
import { SignUp } from './signUp'

export const Auth = () => {
  const path = useResolvedPath('')
  const AUTH_DEFAULT_PAGE = <Navigate to={`${path.pathname}${AUTH_PATH.SignIn}`} />

  return (
    <Routes>
      <Route path={`${AUTH_PATH.Root}`} element={AUTH_DEFAULT_PAGE} />
      <Route path={`${AUTH_PATH.Profile}`} element={<Profile />} />
      <Route path={`${AUTH_PATH.SignIn}`} element={<SignIn />} />
      <Route path={`${AUTH_PATH.SignUp}`} element={<SignUp />} />
      <Route path={`${AUTH_PATH.NewPassword}`} element={<NewPassword />} />
      <Route path={`${AUTH_PATH.ResetPassword}`} element={<ResetPassword />} />
      <Route path={AUTH_PATH.Error} element={<Error404 />} />
    </Routes>
  )
}
