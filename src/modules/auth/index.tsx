import React from 'react'

import { Navigate, Route, Routes, useResolvedPath } from 'react-router-dom'

import { Error404 } from '../../pages/error404'

import { AUTH_PATH } from './constants'
import { NewPassword } from './new-password'
import { Profile } from './profile'
import { ResetPassword } from './reset-password'
import { SignIn } from './sign-in'
import { SignUp } from './sign-up'
import { AuthContainer, FormWrapper } from './styles'

export const Auth = () => {
  const path = useResolvedPath('')
  const AUTH_DEFAULT_PAGE = <Navigate to={`${path.pathname}${AUTH_PATH.SignUp}`} />

  return (
    <AuthContainer>
      <FormWrapper>
        <Routes>
          <Route path={`${AUTH_PATH.Root}`} element={AUTH_DEFAULT_PAGE} />
          <Route path={`${AUTH_PATH.Profile}`} element={<Profile />} />
          <Route path={`${AUTH_PATH.SignIn}`} element={<SignIn />} />
          <Route path={`${AUTH_PATH.SignUp}`} element={<SignUp />} />
          <Route path={`${AUTH_PATH.NewPassword}`} element={<NewPassword />} />
          <Route path={`${AUTH_PATH.ResetPassword}`} element={<ResetPassword />} />
          <Route path={AUTH_PATH.Error} element={<Error404 />} />
        </Routes>
      </FormWrapper>
    </AuthContainer>
  )
}
