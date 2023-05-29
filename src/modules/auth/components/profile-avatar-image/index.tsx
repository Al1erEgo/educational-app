import React, { FC } from 'react'

import { UserOutlined } from '@ant-design/icons'
import { Skeleton } from 'antd'

import { StyledProfileAvatar } from './styles'

import { ProfileAvatarType } from '@/modules/auth/types/auth-avatar'
import { getAvatar } from '@/modules/auth/utils'

export const ProfileAvatarImage: FC<ProfileAvatarType> = ({
  avatar,
  isLoading,
}) => {
  const avatarToShow = getAvatar(avatar)

  if (isLoading) {
    return <Skeleton.Image active />
  }
  if (avatarToShow) {
    return <StyledProfileAvatar src={avatar} />
  }

  return <UserOutlined />
}
