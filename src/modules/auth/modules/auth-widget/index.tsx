import React from 'react'

import { LogoutOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

import { useNavigateToOnclick } from '../../../../hooks'
import { ABSOLUTE_AUTH_PATH } from '../../constants'
import { useAuthorised, useMutation } from '../../hooks'

import { WidgetProfile } from './components/widget-profile'

export const AuthWidget = () => {
  const { isAuthorised, data: userData } = useAuthorised()
  const [goToLogoutHandler] = useMutation('logout')

  const goToProfileHandler = useNavigateToOnclick(ABSOLUTE_AUTH_PATH.Profile)
  const goToSignInHandler = useNavigateToOnclick(ABSOLUTE_AUTH_PATH.SignIn)
  const goToSignUpHandler = useNavigateToOnclick(ABSOLUTE_AUTH_PATH.SignUp)

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
