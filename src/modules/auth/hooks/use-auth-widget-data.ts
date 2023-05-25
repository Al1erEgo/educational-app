import { useLocation } from 'react-router-dom'

import { useNavigateToOnclick } from '@/hooks'
import { useAuthMeUpdateMutation } from '@/modules/auth/api'
import { ABSOLUTE_AUTH_PATH } from '@/modules/auth/constants'
import { useAuthMutation } from '@/modules/auth/hooks/use-auth-mutation'
import { useAuthorised } from '@/modules/auth/hooks/use-authorised'

export const useAuthWidgetData = () => {
  const { isAuthorised, data: userData } = useAuthorised()
  const [handleLogOut] = useAuthMutation('logout')
  const profileRedirect = useNavigateToOnclick(ABSOLUTE_AUTH_PATH.Profile)
  const signInRedirect = useNavigateToOnclick(ABSOLUTE_AUTH_PATH.SignIn)
  const signUpRedirect = useNavigateToOnclick(ABSOLUTE_AUTH_PATH.SignUp)

  const location = useLocation()

  const [_, { isLoading }] = useAuthMeUpdateMutation({
    fixedCacheKey: 'avatar',
  })

  const unauthorisedButtonProps =
    location.pathname === '/auth/sign-up'
      ? { children: 'Sign in', onClick: signInRedirect }
      : { children: 'Sign up', onClick: signUpRedirect }

  const userName = userData ? userData.name : 'No name'

  return {
    handleLogOut,
    isLoading,
    isAuthorised,
    userName,
    userData,
    profileRedirect,
    unauthorisedButtonProps,
  }
}
