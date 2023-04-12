import { authApi, useLazyAuthMeQuery } from '../../auth-api'

export const useAuthorised = () => {
  const authQueryResult = authApi.endpoints.authMe.useQueryState('auth')
  //const [, result] = useLazyAuthMeQuery()

  return {
    isAuthorised: authQueryResult.status === 'fulfilled',
    data: authQueryResult.data || undefined,
  }
}
