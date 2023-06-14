import React, { FC } from 'react'

import { LogoutOutlined } from '@ant-design/icons'

import { ProfileWidgetAvatar } from '../profile-widget-avatar'

import { useProfileWidgetData } from './hook'
import { StyledAuthWidgetButton, StyledUserDataWrapper, StyledUserName } from './styles'

export const ProfileWidget: FC = () => {
  const { handleLogOut, isLoading, isAuthorised, userName, handleRedirectToProfile, unauthorisedButtonProps, avatar } =
    useProfileWidgetData()

  if (!isAuthorised) {
    return <StyledAuthWidgetButton type={'primary'} {...unauthorisedButtonProps} />
  }

  return (
    <>
      <StyledUserDataWrapper onClick={handleRedirectToProfile}>
        <StyledUserName>{userName}</StyledUserName>
        <ProfileWidgetAvatar isLoading={isLoading} avatar={avatar} />
      </StyledUserDataWrapper>
      <StyledAuthWidgetButton icon={<LogoutOutlined />} onClick={handleLogOut}>
        Log out
      </StyledAuthWidgetButton>
    </>
  )
}
