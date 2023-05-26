import React, { FC } from 'react'

import { UserOutlined } from '@ant-design/icons'
import { Skeleton } from 'antd'

import { StyledProfileAvatar } from './styles'

import { ProfileAvatarType } from '@/modules/auth/types/auth-avatar'

export const ProfileAvatarImage: FC<ProfileAvatarType> = ({
  avatar,
  isLoading,
}) => {
  if (isLoading) {
    return <Skeleton.Image active />
  }
  if (avatar) {
    return <StyledProfileAvatar src={avatar} />
  }

  return <UserOutlined />
}
