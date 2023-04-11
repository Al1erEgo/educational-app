import React from 'react'

import { LogoutOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

import { MAIN_PATH } from '../../../../constants'
import { useAuthMeLogOutMutation } from '../../auth-api'
import { AUTH_PATH } from '../../constants'
import { useAuthorised } from '../../hooks'
import { useSubmit } from '../../hooks/use-submit'

import { WidgetButton } from './WidgetButton'
import { WidgetProfile } from './WidgetProfile'

export const AuthWidget = () => {
  const [logout, { isLoading: isLoggingOut }] = useAuthMeLogOutMutation()
  const navigate = useNavigate()
  const { isAuthorised, data: userData } = useAuthorised()

  const goToProfileHandler = () => {
    navigate(`${MAIN_PATH.Auth}${AUTH_PATH.Profile}`)
  }
  const goToSignInHandler = () => {
    navigate(`${MAIN_PATH.Auth}${AUTH_PATH.SignIn}`)
  }

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
