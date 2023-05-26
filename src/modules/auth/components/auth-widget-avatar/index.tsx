import React, { FC } from 'react'

import { UserOutlined } from '@ant-design/icons'

import { StyledSkeletonAvatar, StyledUserIconWidget } from './styles'

import { ProfileAvatarType } from '@/modules/auth/types/auth-avatar'
import { getAvatar } from '@/modules/auth/utils/get-avatar'


export const AuthWidgetAvatar: FC<ProfileAvatarType> = ({
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
