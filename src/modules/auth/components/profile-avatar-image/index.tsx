import React from 'react'

import { UserOutlined } from '@ant-design/icons'
import { Skeleton } from 'antd'

export const ProfileAvatarImage = ({ avatar, isLoading }) => {
  if (isLoading) {
    return <Skeleton.Image active />
  }
  if (avatar) {
    return <img src={avatar} alt="avatar" style={{ width: '100%' }} />
  }

  return <UserOutlined />
}
