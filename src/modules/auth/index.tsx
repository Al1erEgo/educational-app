import React from 'react'

import { useResolvedPath } from 'react-router-dom'

import { AUTH_PATH } from './constants'
import { AUTH_ROUTES } from './constants/path'
import { useCardsRoutes } from './hooks'
import { AuthContainer } from './styles'

export const Auth = () => {
  const path = useResolvedPath('')

  const routes = useCardsRoutes(
    AUTH_ROUTES,
    `${path.pathname}${AUTH_PATH.Profile}`,
    `${path.pathname}${AUTH_PATH.SignIn}`
  )

  return <AuthContainer>{routes}</AuthContainer>
}
