import { useLocation } from 'react-router-dom'

import { useNavigateHandler } from '@/hooks'
import { useAuthMeUpdateMutation } from '@/modules/auth/api'
import { ABSOLUTE_AUTH_PATH } from '@/modules/auth/constants'
import { useAuthMutation } from '@/modules/auth/hooks/use-auth-mutation'
import { useAuthorised } from '@/modules/auth/hooks/use-authorised'

export const useAuthWidgetData = () => {
  const { isAuthorised, data: userData } = useAuthorised()
  const [handleLogOut] = useAuthMutation('logout')
  const handleProfileRedirect = useNavigateHandler(ABSOLUTE_AUTH_PATH.Profile)
  const handleSignInRedirect = useNavigateHandler(ABSOLUTE_AUTH_PATH.SignIn)
  const handleSignUpRedirect = useNavigateHandler(ABSOLUTE_AUTH_PATH.SignUp)

  const location = useLocation()

  const avatar = userData?.avatar

  const [_, { isLoading }] = useAuthMeUpdateMutation({
    fixedCacheKey: 'avatar',
  })

  const unauthorisedButtonProps =
    location.pathname === '/auth/sign-up'
      ? { children: 'Sign in', onClick: handleSignInRedirect }
      : { children: 'Sign up', onClick: handleSignUpRedirect }

  const userName = userData ? userData.name : 'No name'

  return {
    handleLogOut,
    avatar,
    isLoading,
    isAuthorised,
    userName,
    handleProfileRedirect,
    unauthorisedButtonProps,
  }
}
