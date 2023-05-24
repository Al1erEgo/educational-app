import React, { FC } from 'react'

import { UserOutlined } from '@ant-design/icons'

import { StyledSkeletonAvatar, StyledUserIconWidget } from './styles'

import { getAvatar } from '@/modules/auth/utils/get-avatar'

type AuthWidgetAvatarType = {
  isLoading: boolean
  avatar: string | undefined
}

export const AuthWidgetAvatar: FC<AuthWidgetAvatarType> = ({
  isLoading,
  avatar,
}) => {
  const avatarToShow = getAvatar(avatar)

  if (isLoading) {
    return <StyledSkeletonAvatar />
  }
  if (avatarToShow) {
    return <StyledUserIconWidget src={avatar} />
  }

  return <UserOutlined />
}
