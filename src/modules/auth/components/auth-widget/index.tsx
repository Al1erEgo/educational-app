import React, { FC } from 'react'

import { LogoutOutlined } from '@ant-design/icons'
import { Tooltip } from 'antd'
import { useLocation } from 'react-router-dom'

import { AuthWidgetAvatar } from '../auth-widget-avatar'

import {
  StyledAuthWidgetButton,
  StyledUserDataWrapper,
  StyledUserName,
} from './styles'

import { useNavigateToOnclick } from '@/hooks'
import { useAuthMeUpdateMutation } from '@/modules/auth/api'
import { ABSOLUTE_AUTH_PATH } from '@/modules/auth/constants'
import { useAuthMutation, useAuthorised } from '@/modules/auth/hooks'

export const AuthWidget: FC = () => {
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

  if (!isAuthorised) {
    return (
      <StyledAuthWidgetButton type={'primary'} {...unauthorisedButtonProps} />
    )
  }

  const userName = userData ? userData.name : 'No name'

  return (
    <>
      <StyledUserDataWrapper onClick={profileRedirect}>
        <Tooltip title={userName}>
          <StyledUserName>{userName}</StyledUserName>
        </Tooltip>
        <AuthWidgetAvatar isLoading={isLoading} avatar={userData?.avatar} />
      </StyledUserDataWrapper>
      <StyledAuthWidgetButton icon={<LogoutOutlined />} onClick={handleLogOut}>
        Log out
      </StyledAuthWidgetButton>
    </>
  )
}
