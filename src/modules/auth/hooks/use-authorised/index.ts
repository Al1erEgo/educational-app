import { useAuthMeQuery } from '../../auth-api'

export const useAuthorised = () => {
  const { isLoading, isFetching, isSuccess } = useAuthMeQuery()

  return {
    isLoading: isLoading || isFetching,
    isSuccess,
  }
}
