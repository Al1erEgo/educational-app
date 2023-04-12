import React from 'react'

import { RouteObject, useResolvedPath, useRoutes } from 'react-router-dom'

import { AuthProvider } from '../../components'
import { useAuthorised } from '../../modules/auth/hooks'

type RouteType = {
  path?: string
  element?: React.ReactElement
  children?: readonly RouteType[]
}

type RoutesType = {
  [routes: string]: readonly RouteType[]
}

type UseGuestRoutesType = (
  routes: RoutesType,
  navigateToDefaultPage: React.ReactElement
) => React.ReactElement | null

export const useCardsRoutes: UseGuestRoutesType = (routes, navigateToDefaultPage) => {
  const { isAuthorised } = useAuthorised()

  let prepareRoutes: RouteType[] = [
    { ...routes.ROOT_ROUTE[0], element: navigateToDefaultPage },
    { element: <AuthProvider />, children: routes.PRIVATE_ROUTES },
  ]

  if (!isAuthorised) {
    prepareRoutes = [...prepareRoutes, ...routes.GUEST_ROUTES]
  }

  return useRoutes(prepareRoutes as RouteObject[])
}
