import { useLocation } from 'react-router-dom'

import { useNavigateHandler } from '@/hooks'
import { useAuthMeUpdateMutation } from '@/modules/auth/api'
import { ABSOLUTE_AUTH_PATH } from '@/modules/auth/constants'
import { useAuthMutation } from '@/modules/auth/hooks/use-auth-mutation'
import { useAuthorised } from '@/modules/auth/hooks/use-authorised'

export const useAuthWidgetData = () => {
  const { isAuthorised, data: userData } = useAuthorised()
  const [handleLogOut] = useAuthMutation('logout')
  const handleRedirectToProfile = useNavigateHandler(ABSOLUTE_AUTH_PATH.Profile)
  const handleRedirectToSignIn = useNavigateHandler(ABSOLUTE_AUTH_PATH.SignIn)
  const handleRedirectToSignUp = useNavigateHandler(ABSOLUTE_AUTH_PATH.SignUp)

  const location = useLocation()

  const avatar = userData?.avatar

  const [_, { isLoading }] = useAuthMeUpdateMutation({
    fixedCacheKey: 'avatar',
  })

  const unauthorisedButtonProps =
    location.pathname === '/auth/sign-up'
      ? { children: 'Sign in', onClick: handleRedirectToSignIn }
      : { children: 'Sign up', onClick: handleRedirectToSignUp }

  const userName = userData ? userData.name : 'No name'

  return {
    handleLogOut,
    avatar,
    isLoading,
    isAuthorised,
    userName,
    handleRedirectToProfile,
    unauthorisedButtonProps,
  }
}
