import { authApi } from '../api'
//TODO type
export const useAuthorised = () => {
  const authQueryResult = authApi.endpoints.authMe.useQueryState('auth')

  return {
    isAuthorised: authQueryResult.isSuccess,
    data: authQueryResult.data,
  }
}
