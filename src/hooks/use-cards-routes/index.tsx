import React from 'react'

import { Navigate, RouteObject, useRoutes } from 'react-router-dom'

import { AuthProvider } from '../../components'
import { useAuthorised } from '../../modules/auth/hooks'

import { RouteType, UseRoutesType } from './types'
/**
A hook that prepares and returns the routes based on user authorization status.
@param {Object} routes - An object containing all the routes information.
@param {string} userRoute - A string representing the route for authenticated users.
@param {string} guestRoute - A string representing the route for unauthenticated users.
@returns {Object} - An object containing the prepared routes for displaying Tree components.
*/
export const useCardsRoutes: UseRoutesType = (routes, userRoute, guestRoute) => {
  const { isAuthorised } = useAuthorised()
  // Default page to be shown based on user authorization status
  const defaultPage = isAuthorised ? <Navigate to={userRoute} /> : <Navigate to={guestRoute} />
  // Preparing routes
  let prepareRoutes: RouteType[] = [
    { ...routes.ROOT_ROUTE[0], element: defaultPage },
    { element: <AuthProvider />, children: routes.PRIVATE_ROUTES },
    ...routes.MAIN_ROUTES,
  ]

  // If user is unauthenticated, append guest routes to prepared routes
  if (!isAuthorised) {
    prepareRoutes = [...prepareRoutes, ...routes.GUEST_ROUTES]
  }

  // Return the prepared routes for displaying Cards component
  return useRoutes(prepareRoutes as RouteObject[])
}
