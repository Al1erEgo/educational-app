import { FC } from 'react'

import { Navigate, Outlet } from 'react-router-dom'

import { MAIN_PATH } from '@/constants'
import { useAuthorised } from '@/modules'
import { AUTH_PATH } from '@/modules/auth/constants'

export const GuestProvider: FC = () => {
  const { isAuthorised } = useAuthorised()

  return isAuthorised ? <Navigate to={`${MAIN_PATH.Auth}${AUTH_PATH.Profile}`} /> : <Outlet />
}
