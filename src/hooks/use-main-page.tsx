import React from 'react'

import { Navigate } from 'react-router-dom'

import { useAuthorised } from '@/modules/auth/hooks'

type UseDefaultPageType = (
  userRoute: string,
  guestRoute: string
) => {
  defaultPage: React.ReactElement
}

//get two routes, returns Navigation to route, depends on authorisation
export const useDefaultPage: UseDefaultPageType = (userRoute, guestRoute) => {
  const { isAuthorised } = useAuthorised()

  const defaultPage = isAuthorised ? (
    <Navigate to={userRoute} />
  ) : (
    <Navigate to={guestRoute} />
  )

  return { defaultPage }
}
