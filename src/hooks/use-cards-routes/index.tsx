import React from 'react'

import { Navigate, RouteObject, useRoutes } from 'react-router-dom'

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
  userRoute: string,
  guestRoute: string
) => React.ReactElement | null

export const useCardsRoutes: UseGuestRoutesType = (routes, userRoute, guestRoute) => {
  const { isAuthorised } = useAuthorised()

  const defaultPage = isAuthorised ? <Navigate to={userRoute} /> : <Navigate to={guestRoute} />

  let prepareRoutes: RouteType[] = [
    { ...routes.ROOT_ROUTE[0], element: defaultPage },
    { element: <AuthProvider />, children: routes.PRIVATE_ROUTES },
    ...routes.MAIN_ROUTES,
  ]

  if (!isAuthorised) {
    prepareRoutes = [...prepareRoutes, ...routes.GUEST_ROUTES]
  }

  return useRoutes(prepareRoutes as RouteObject[])
}
