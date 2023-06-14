import { redirect, useLocation } from 'react-router-dom'

import { MAIN_PATH } from '@/constants'
import { useDoNavigate } from '@/hooks'
import { useAuthorised } from '@/modules'
import { useAuthMeLogOutMutation, useAuthMeUpdateMutation } from '@/modules/auth/api'
import { AUTH_PATH } from '@/modules/auth/constants'

type OnSubmitMutationType = <T>(data?: T) => Promise<void>

export const useProfileWidgetData = () => {
  const { isAuthorised, data: userData } = useAuthorised()
  const [trigger] = useAuthMeLogOutMutation()
  const handleRedirectToProfile = useDoNavigate(`${MAIN_PATH.Auth}${AUTH_PATH.Profile}`)
  const handleRedirectToSignIn = useDoNavigate(`${MAIN_PATH.Auth}${AUTH_PATH.SignIn}`)
  const handleRedirectToSignUp = useDoNavigate(`${MAIN_PATH.Auth}${AUTH_PATH.SignUp}`)

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
      redirect(`${MAIN_PATH.Auth}${AUTH_PATH.SignIn}`)
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
