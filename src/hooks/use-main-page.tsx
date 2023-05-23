import { Navigate } from 'react-router-dom'

import { useAuthorised } from '../modules/auth/hooks'

type UseDefaultPageType = (
  userRoute: string,
  guestRoute: string
) => {
  defaultPage: JSX.Element
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
