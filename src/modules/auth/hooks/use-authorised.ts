import { authApi } from '../api'

/**
 * A hook that provides authorization information.
 *
 * @returns {Object} An object containing authorization information.
 * @property {boolean} isAuthorised - Indicates whether the user is authorized.
 * @property {LoginResponseType | undefined} data - The authorization data returned by the query.
 */
export const useAuthorised = () => {
  const authQueryResult = authApi.endpoints.authMe.useQueryState('auth')

  return {
    isAuthorised: authQueryResult.isSuccess,
    data: authQueryResult.data,
  }
}
