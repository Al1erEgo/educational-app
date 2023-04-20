import React from 'react'

import { Route, Routes, useResolvedPath } from 'react-router-dom'

import { Error404 } from '../../components'
import { useDefaultPage } from '../../hooks/use-main-page'

import { AuthProvider } from './components'
import { GuestProvider } from './components/guest-provider'
import { AUTH_PATH } from './constants'
import { NewPassword } from './modules/new-password'
import { Profile } from './modules/profile'
import { ResetPassword } from './modules/reset-password'
import { SignIn } from './modules/sign-in'
import { SignUp } from './modules/sign-up'
import { AuthContainer } from './styles'

export const Auth = () => {
  const path = useResolvedPath('')

  const { defaultPage } = useDefaultPage(
    `${path.pathname}${AUTH_PATH.Profile}`,
    `${path.pathname}${AUTH_PATH.SignIn}`
  )

  return (
    <AuthContainer>
      <Routes>
        <Route path={AUTH_PATH.Root} element={defaultPage} />
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
    </AuthContainer>
  )
}
