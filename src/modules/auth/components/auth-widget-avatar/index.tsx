import React, { FC } from 'react'

import { UserOutlined } from '@ant-design/icons'

import { StyledSkeletonAvatar, StyledUserIconWidget } from './styles'

type AuthWidgetAvatarType = {
  isLoading: boolean
  avatar: string | undefined
}

export const AuthWidgetAvatar: FC<AuthWidgetAvatarType> = ({
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
