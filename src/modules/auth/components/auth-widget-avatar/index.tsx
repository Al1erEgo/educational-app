import React, { FC } from 'react'

import { UserOutlined } from '@ant-design/icons'

import { StyledSkeletonAvatar, StyledUserIconWidget } from './styles'

import { ProfileAvatarType } from '@/modules/auth/types/auth-avatar'

export const AuthWidgetAvatar: FC<ProfileAvatarType> = ({
  isLoading,
  avatar,
}) => {
  if (isLoading) {
    return <StyledSkeletonAvatar />
  }
  if (avatar) {
    return <StyledUserIconWidget src={avatar} />
  }

  return <UserOutlined />
}
