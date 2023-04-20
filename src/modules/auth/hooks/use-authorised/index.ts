import { authApi, useAuthMeQuery } from '../../api'

export const useAuthorised = () => {
  //const authQueryResult = authApi.endpoints.authMe.useQueryState('auth')
  const { data, isSuccess } = useAuthMeQuery('auth')

  return {
    // isAuthorised: authQueryResult.status === 'fulfilled',
    // data: authQueryResult.data || undefined,
    isAuthorised: isSuccess,
    data,
  }
}
