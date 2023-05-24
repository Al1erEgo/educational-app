import React, { FC } from 'react'

import { UserOutlined } from '@ant-design/icons'
import { Skeleton } from 'antd'

import { StyledProfileAvatar } from './styles'

type ProfileAvatarImageType = {
  avatar: string | undefined
  isLoading: boolean
}

export const ProfileAvatarImage: FC<ProfileAvatarImageType> = ({
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
