import React from 'react'

import { useResolvedPath } from 'react-router-dom'

import { useDefaultPage } from '../../hooks'

import { AUTH_PATH } from './constants'
import { AUTH_ROUTES } from './constants/path'
import { useCardsRoutes } from './hooks'
import { AuthContainer } from './styles'

export const Auth = () => {
  const path = useResolvedPath('')

  const { defaultPage } = useDefaultPage(
    `${path.pathname}${AUTH_PATH.Profile}`,
    `${path.pathname}${AUTH_PATH.SignIn}`
  )

  const routes = useCardsRoutes(AUTH_ROUTES, defaultPage)

  return <AuthContainer>{routes}</AuthContainer>
}
