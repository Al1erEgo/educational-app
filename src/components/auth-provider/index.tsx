import React from 'react'

import { Navigate, Outlet } from 'react-router-dom'

import { MAIN_PATH } from '../../constants'
import { useAuthorised } from '../../modules/auth/hooks'

export const AuthProvider: React.FC = () => {
  const { isSuccess } = useAuthorised()

  return isSuccess ? <Outlet /> : <Navigate to={`${MAIN_PATH.Auth}`} />
}
