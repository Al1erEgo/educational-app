import { useAuthMeQuery, useLoginMutation } from '../auth-api'

export const useAuthorised = () => {
  const { data: authMeData } = useAuthMeQuery()
  const [, { data: loginData }] = useLoginMutation()

  return (authMeData || loginData) !== undefined
}
