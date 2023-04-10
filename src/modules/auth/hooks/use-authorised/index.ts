import { authApi } from '../../auth-api'

export const useAuthorised = () => {
  const authQueryResult = authApi.endpoints.authMe.useQueryState('auth')

  return {
    isAuthorised: authQueryResult.status === 'fulfilled',
    data: authQueryResult.data || undefined,
  }
}
