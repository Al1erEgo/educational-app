import { Link, Navigate, Route, Routes } from 'react-router-dom'

import { PATH } from '../../constants'

import { AUTH_PATH } from './constants'
import { SignIn } from './signIn'

export const Auth = () => {
  const AUTH_DEFAULT_PAGE = <Navigate to={`${AUTH_PATH.SingIn}`} />

  return (
    <Routes>
      <Route path={`${AUTH_PATH.Root}`} element={AUTH_DEFAULT_PAGE} />
      <Route path={`${AUTH_PATH.SingIn}`} element={<SignIn />} />
    </Routes>
  )
}
