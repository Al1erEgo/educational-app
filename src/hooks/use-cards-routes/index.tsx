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

//hook get routes object and two conditional routes for guest or loginned user
export const useCardsRoutes: UseGuestRoutesType = (routes, userRoute, guestRoute) => {
  const { isAuthorised } = useAuthorised()

  //which page will be default depends on auth status
  const defaultPage = isAuthorised ? <Navigate to={userRoute} /> : <Navigate to={guestRoute} />

  //constructing routes array for useRouter hook from react-router-dom without guest routes
  //private routes works in any case, but for guest will be redirected to authorisation
  let prepareRoutes: RouteType[] = [
    { ...routes.ROOT_ROUTE[0], element: defaultPage },
    { element: <AuthProvider />, children: routes.PRIVATE_ROUTES },
    ...routes.MAIN_ROUTES,
  ]

  //add guest routes if user is not logged in
  if (!isAuthorised) {
    prepareRoutes = [...prepareRoutes, ...routes.GUEST_ROUTES]
  }

  return useRoutes(prepareRoutes as RouteObject[])
}
