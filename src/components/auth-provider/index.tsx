import React from 'react'

import { Navigate, Outlet } from 'react-router-dom'

import { MAIN_PATH } from '../../constants'
import { authApi } from '../../modules/auth/auth-api'

export const AuthProvider: React.FC = () => {
  const [, { isSuccess }] = authApi.useLazyAuthMeQuery()

  return isSuccess ? <Outlet /> : <Navigate to={`${MAIN_PATH.Auth}`} />
}
