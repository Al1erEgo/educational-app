import React, { FC } from 'react'

import { UserOutlined } from '@ant-design/icons'
import { Skeleton } from 'antd'

import { StyledProfileAvatar } from './styles'

import { ProfileAvatarProps } from '@/modules/auth/types/profile-avatar-props'
import { getAvatar } from '@/modules/auth/utils'

export const ProfileAvatarImage: FC<ProfileAvatarProps> = ({ avatar, isLoading }) => {
  const avatarToShow = getAvatar(avatar)

  if (isLoading) {
    return <Skeleton.Image active />
  }
  if (avatarToShow) {
    return <StyledProfileAvatar src={avatar} />
  }

  return <UserOutlined />
}
