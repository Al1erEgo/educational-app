import React from 'react'

import { Navigate } from 'react-router-dom'

import { useAuthorised } from '@/modules/auth/hooks'

type UseDefaultPageType = (
  userRoute: string,
  guestRoute: string
) => {
  defaultPage: React.ReactElement
}

/**
 * A hook that returns the Navigate to route component based on the authorization status.
 *
 * @param {string} userRoute - The route for authorized users.
 * @param {string} guestRoute - The route for guest users.
 * @returns {Object} An object containing the default page component.
 */
export const useDefaultPage: UseDefaultPageType = (userRoute, guestRoute) => {
  const { isAuthorised } = useAuthorised()

  const defaultPage = isAuthorised ? (
    <Navigate to={userRoute} />
  ) : (
    <Navigate to={guestRoute} />
  )

  return { defaultPage }
}
