import { Navigate } from 'react-router-dom'

import { MAIN_PATH } from '../../constants'
import { useAuthorised } from '../../modules/auth/hooks'

export const useMainPage = () => {
  const { isAuthorised } = useAuthorised()

  const defaultPage = isAuthorised ? (
    <Navigate to={`${MAIN_PATH.Cards}`} />
  ) : (
    <Navigate to={`${MAIN_PATH.Auth}`} />
  )

  return { defaultPage }
}
