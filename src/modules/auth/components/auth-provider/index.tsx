import React from 'react'

import { Navigate, Outlet } from 'react-router-dom'

import { MAIN_PATH } from '../../../../constants'
import { useAuthorised } from '../../hooks'

export const AuthProvider: React.FC = () => {
  const { isAuthorised } = useAuthorised()

  return isAuthorised ? <Outlet /> : <Navigate to={MAIN_PATH.Auth} />
}
