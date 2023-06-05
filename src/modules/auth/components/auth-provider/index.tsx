import { FC } from 'react'

import { Navigate, Outlet } from 'react-router-dom'

import { ABSOLUTE_AUTH_PATH } from '@/modules/auth/constants'
import { useAuthorised } from '@/modules/auth/hooks'

export const AuthProvider: FC = () => {
  const { isAuthorised } = useAuthorised()

  return isAuthorised ? <Outlet /> : <Navigate to={ABSOLUTE_AUTH_PATH.SignIn} />
}
