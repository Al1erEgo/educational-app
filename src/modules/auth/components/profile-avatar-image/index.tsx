import React, { FC } from 'react'

import { UserOutlined } from '@ant-design/icons'
import { Skeleton } from 'antd'

type ProfileAvatarImageType = {
  avatar: string | undefined
  isLoading: boolean
}

export const ProfileAvatarImage: FC<ProfileAvatarImageType> = ({ avatar, isLoading }) => {
  if (isLoading) {
    return <Skeleton.Image active />
  }
  if (avatar) {
    return <img src={avatar} alt="avatar" style={{ width: '100%' }} />
  }

  return <UserOutlined />
}
