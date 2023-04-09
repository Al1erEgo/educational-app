import { authApi } from '../../auth-api'

export const useAuthorised = () => {
  const authLoginResult = authApi.endpoints.authMe.useQueryState('login')
  const authQueryResult = authApi.endpoints.authMe.useQueryState('auth')

  return { isAuthorised: (authLoginResult.status || authQueryResult.status) === 'fulfilled' }
}
