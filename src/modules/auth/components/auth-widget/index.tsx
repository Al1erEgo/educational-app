import React from 'react'

import { LogoutOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

import { MAIN_PATH } from '../../../../constants'
import { useAuthMeLogOutMutation, useAuthMeQuery } from '../../auth-api'
import { AUTH_PATH } from '../../constants'
import { useAuthorised } from '../../hooks'

import { WidgetButton } from './WidgetButton'
import { WidgetProfile } from './WidgetProfile'

export const AuthWidget = () => {
  const [logout, { isLoading: isLoggingOut }] = useAuthMeLogOutMutation()
  const navigate = useNavigate()
  const { isAuthorised, data: userData } = useAuthorised()

  const goToSignInHandler = () => {
    navigate(`${MAIN_PATH.Auth}${AUTH_PATH.SignIn}`)
  }
  const goToLogoutHandler = async () => {
    await logout({})
    navigate(`${MAIN_PATH.Auth}${AUTH_PATH.SignIn}`)
  }

  if (isAuthorised) {
    return (
      <>
        <WidgetProfile userName={userData?.name} />
        <WidgetButton onClick={goToLogoutHandler} icon={<LogoutOutlined />} loading={isLoggingOut}>
          {'Log out'}
        </WidgetButton>
      </>
    )
  } else {
    return (
      <WidgetButton type={'primary'} onClick={goToSignInHandler}>
        {'Sign In'}
      </WidgetButton>
    )
  }
}
