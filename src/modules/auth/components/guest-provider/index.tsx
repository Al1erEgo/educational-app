import React from 'react'

import { Navigate, Outlet } from 'react-router-dom'

import { ABSOLUTE_AUTH_PATH } from '../../constants'
import { useAuthorised } from '../../hooks'

export const GuestProvider = () => {
  const { isAuthorised } = useAuthorised()

  return isAuthorised ? <Navigate to={ABSOLUTE_AUTH_PATH.Profile} /> : <Outlet />
}
