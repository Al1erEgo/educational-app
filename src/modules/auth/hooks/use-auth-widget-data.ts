import { redirect, useLocation } from 'react-router-dom'

import { useNavigateHandler } from '@/hooks'
import { useAuthMeLogOutMutation, useAuthMeUpdateMutation } from '@/modules/auth/api'
import { ABSOLUTE_AUTH_PATH } from '@/modules/auth/constants'
import { useAuthorised } from '@/modules/auth/hooks/use-authorised'
import { OnSubmitMutationType } from '@/modules/auth/types'

export const useAuthWidgetData = () => {
  const { isAuthorised, data: userData } = useAuthorised()
  const [trigger] = useAuthMeLogOutMutation()
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

  const handleLogOut: OnSubmitMutationType = async () => {
    try {
      await trigger().unwrap()
      redirect(ABSOLUTE_AUTH_PATH.SignIn)
    } catch (e: unknown) {
      return
    }
  }

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
