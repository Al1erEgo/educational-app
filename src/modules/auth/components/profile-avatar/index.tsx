import React, { FC } from 'react'

import { Avatar, Tooltip, Upload } from 'antd'

import { ProfileAvatarImage } from '../profile-avatar-image'

import { useProfileAvatarData } from './hook'
import { StyledAvatarGroup, StyledCloseCircleTwoTone } from './styles'

import { ErrorMessage } from '@/components'

type ProfileAvatarProps = {
  avatar?: string
}

export const ProfileAvatar: FC<ProfileAvatarProps> = ({ avatar }) => {
  const { handleDeleteAvatar, handleUploadAvatar, customError, isLoading, serverError } = useProfileAvatarData()

  return (
    <>
      <StyledAvatarGroup>
        <Upload showUploadList={false} accept="image/*" customRequest={handleUploadAvatar}>
          <Tooltip title={'Click to upload new Avatar'}>
            <Avatar shape="square" size={96} icon={<ProfileAvatarImage avatar={avatar} isLoading={isLoading} />} />
          </Tooltip>
        </Upload>
        {avatar && <StyledCloseCircleTwoTone onClick={handleDeleteAvatar} />}
      </StyledAvatarGroup>
      <ErrorMessage serverError={serverError} textError={customError} />
    </>
  )
}
