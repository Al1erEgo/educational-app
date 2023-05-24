import { FC } from 'react'

import { Navigate, Outlet } from 'react-router-dom'

import { useAuthorised } from '../../hooks'

import { MAIN_PATH } from '@/constants'

export const AuthProvider: FC = () => {
  const { isAuthorised } = useAuthorised()

  return isAuthorised ? <Outlet /> : <Navigate to={MAIN_PATH.Auth} />
}
