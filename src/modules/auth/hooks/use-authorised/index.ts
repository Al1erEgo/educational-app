import { authApi } from '../../api'
//TODO type
export const useAuthorised = () => {
  const authQueryResult = authApi.endpoints.authMe.useQueryState('auth')

  return {
    isAuthorised: authQueryResult.status === 'fulfilled',
    data: authQueryResult.data || undefined,
  }
}
