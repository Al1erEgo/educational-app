import { FC } from 'react'

import { Navigate, Outlet } from 'react-router-dom'

import { MAIN_PATH } from '@/constants'
import { AUTH_PATH } from '@/modules/auth/constants'
import { useAuthorised } from '@/modules/auth/hooks'

export const GuestProvider: FC = () => {
  const { isAuthorised } = useAuthorised()

  return isAuthorised ? <Navigate to={`${MAIN_PATH.Auth}${AUTH_PATH.Profile}`} /> : <Outlet />
}
