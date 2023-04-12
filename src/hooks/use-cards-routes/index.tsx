import React from 'react'

import { RouteObject, useRoutes } from 'react-router-dom'

import { AuthProvider } from '../../components'
import { useAuthorised } from '../../modules/auth/hooks'

type RoutesType = {
  [routes: string]: RouteObject[]
}

type UseGuestRoutesType = (
  routes: RoutesType,
  navigateToDefaultPage: React.ReactElement
) => React.ReactElement | null

export const useCardsRoutes: UseGuestRoutesType = (routes, navigateToDefaultPage) => {
  const { isAuthorised } = useAuthorised()

  let prepareRoutes: RouteObject[] = [
    { ...routes.ROOT_ROUTE[0], element: navigateToDefaultPage },
    { element: <AuthProvider />, children: routes.PRIVATE_ROUTES },
  ]

  if (!isAuthorised) {
    prepareRoutes = [...prepareRoutes, ...routes.GUEST_ROUTES]
  }

  const returnRoutes = useRoutes(prepareRoutes)

  return returnRoutes
}
