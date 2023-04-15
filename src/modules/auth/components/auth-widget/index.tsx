import React from 'react'

import { LogoutOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

import { MAIN_PATH } from '../../../../constants'
import { useNavigateToOnclick } from '../../../../hooks'
import { useAuthMeLogOutMutation } from '../../api'
import { AUTH_PATH } from '../../constants'
import { useAuthorised, useSubmit } from '../../hooks'

import { WidgetProfile } from './WidgetProfile'

export const AuthWidget = () => {
  const [logout] = useAuthMeLogOutMutation()
  const { isAuthorised, data: userData } = useAuthorised()

  const goToProfileHandler = useNavigateToOnclick(`${MAIN_PATH.Auth}${AUTH_PATH.Profile}`)
  const goToSignInHandler = useNavigateToOnclick(`${MAIN_PATH.Auth}${AUTH_PATH.SignIn}`)
  const goToSignUpHandler = useNavigateToOnclick(`${MAIN_PATH.Auth}${AUTH_PATH.SignUp}`)

  const goToLogoutHandler = useSubmit(logout, `${MAIN_PATH.Auth}${AUTH_PATH.SignIn}`)

  const location = useLocation()

  const buttonProps =
    location.pathname === '/auth/sign-up'
      ? { children: 'Sign in', onClick: goToSignInHandler }
      : { children: 'Sign up', onClick: goToSignUpHandler }

  return isAuthorised ? (
    <>
      <WidgetProfile onClick={goToProfileHandler} userName={userData?.name} />
      <StyledButton icon={<LogoutOutlined />} onClick={goToLogoutHandler}>
        Log out
      </StyledButton>
    </>
  ) : (
    <StyledButton type={'primary'} {...buttonProps} />
  )
}
const StyledButton = styled(Button)`
  width: 100px;
  height: 35px;
`
