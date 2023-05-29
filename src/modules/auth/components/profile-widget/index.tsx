import React, { FC } from 'react'

import { LogoutOutlined } from '@ant-design/icons'
import { Tooltip } from 'antd'

import { ProfileWidgetAvatar } from '../profile-widget-avatar'

import {
  StyledAuthWidgetButton,
  StyledUserDataWrapper,
  StyledUserName,
} from './styles'

import { useAuthWidgetData } from '@/modules/auth/hooks/use-auth-widget-data'

export const ProfileWidget: FC = () => {
  const {
    handleLogOut,
    isLoading,
    isAuthorised,
    userName,
    handleProfileRedirect,
    unauthorisedButtonProps,
    avatar,
  } = useAuthWidgetData()

  if (!isAuthorised) {
    return (
      <StyledAuthWidgetButton type={'primary'} {...unauthorisedButtonProps} />
    )
  }

  return (
    <>
      <StyledUserDataWrapper onClick={handleProfileRedirect}>
        <Tooltip title={userName}>
          <StyledUserName>{userName}</StyledUserName>
        </Tooltip>
        <ProfileWidgetAvatar isLoading={isLoading} avatar={avatar} />
      </StyledUserDataWrapper>
      <StyledAuthWidgetButton icon={<LogoutOutlined />} onClick={handleLogOut}>
        Log out
      </StyledAuthWidgetButton>
    </>
  )
}
