import { authApi } from '../api'

export const useAuthorised = () => {
  const authQueryResult = authApi.endpoints.authMe.useQueryState('auth')

  return {
    isAuthorised: authQueryResult.isSuccess,
    data: authQueryResult.data,
  }
}
