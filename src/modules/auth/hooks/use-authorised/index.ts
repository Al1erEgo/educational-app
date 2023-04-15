import { index } from '../../api'

export const useAuthorised = () => {
  const authQueryResult = index.endpoints.authMe.useQueryState('auth')

  return {
    isAuthorised: authQueryResult.status === 'fulfilled',
    data: authQueryResult.data || undefined,
  }
}
