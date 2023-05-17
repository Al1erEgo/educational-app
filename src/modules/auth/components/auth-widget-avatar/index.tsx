import React from 'react'

import { UserOutlined } from '@ant-design/icons'

import { StyledSkeletonAvatar, StyledUserIconWidget } from './styles'

export const AuthWidgetAvatar = ({ isLoading, userData }) => {
  if (isLoading) {
    return <StyledSkeletonAvatar />
  }
  if (userData.avatar) {
    return <StyledUserIconWidget src={userData.avatar} />
  }

  return <UserOutlined />
}
