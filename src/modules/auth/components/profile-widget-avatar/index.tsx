import React, { FC } from 'react'

import { UserOutlined } from '@ant-design/icons'

import { StyledSkeletonAvatar, StyledUserIconWidget } from './styles'

import { ProfileAvatarProps } from '@/modules/auth/types/profile-avatar-props'
import { getAvatar } from '@/modules/auth/utils/get-avatar'

export const ProfileWidgetAvatar: FC<ProfileAvatarProps> = ({ isLoading, avatar }) => {
  const avatarToShow = getAvatar(avatar)

  if (isLoading) {
    return <StyledSkeletonAvatar />
  }

  if (avatarToShow) {
    return <StyledUserIconWidget src={avatar} />
  }

  return <UserOutlined />
}
