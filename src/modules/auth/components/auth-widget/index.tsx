import React from 'react'

import { LogoutOutlined } from '@ant-design/icons'

import { MAIN_PATH } from '../../../../constants'
import { useNavigateToOnclick } from '../../../../hooks'
import { useAuthMeLogOutMutation } from '../../api'
import { AUTH_PATH } from '../../constants'
import { useAuthorised, useSubmit } from '../../hooks'

import { WidgetButton } from './WidgetButton'
import { WidgetProfile } from './WidgetProfile'

export const AuthWidget = () => {
  const [logout, { isLoading: isLoggingOut }] = useAuthMeLogOutMutation()

  const { isAuthorised, data: userData } = useAuthorised()

  const goToProfileHandler = useNavigateToOnclick(`${MAIN_PATH.Auth}${AUTH_PATH.Profile}`)
  const goToSignInHandler = useNavigateToOnclick(`${MAIN_PATH.Auth}${AUTH_PATH.SignIn}`)

  const goToLogoutHandler = useSubmit(logout, `${MAIN_PATH.Auth}${AUTH_PATH.SignIn}`)

  if (isAuthorised) {
    return (
      <>
        <WidgetProfile onClick={goToProfileHandler} userName={userData?.name} />
        <WidgetButton onClick={goToLogoutHandler} name={'Log out'} loading={isLoggingOut}>
          <LogoutOutlined />
        </WidgetButton>
      </>
    )
  } else {
    return <WidgetButton name={'Sign in'} type={'primary'} onClick={goToSignInHandler} />
  }
}
