import React, { FC, useState } from 'react'

import { Avatar, Upload } from 'antd'
import { RcFile } from 'antd/es/upload'
import { UploadRequestOption } from 'rc-upload/lib/interface'

import { useAuthMeUpdateMutation } from '../../api'
import { getBase64 } from '../../utils'
import { ProfileAvatarImage } from '../profile-avatar-image'

import { ErrorMessageHandler } from '@/components'
import {
  StyledAvatarGroup,
  StyledCloseCircleTwoTone,
} from '@/modules/auth/components/profile-avatar/styles'

type ProfileAvatarType = {
  avatar?: string
}

export const ProfileAvatar: FC<ProfileAvatarType> = ({ avatar }) => {
  const [customError, setCustomError] = useState<string>('')
  const [trigger, { isLoading, error: serverError }] = useAuthMeUpdateMutation({
    fixedCacheKey: 'avatar',
  })

  const handleUploadAvatar = (action: UploadRequestOption) => {
    if (action.file) {
      const file = action.file as RcFile

      if (file.size < 1100000) {
        getBase64(file, url => {
          trigger({ avatar: url })
        })
      } else {
        setCustomError('Image Too Large, should be less than 100kb!')
      }
    }
  }

  const handleDeleteAvatar = () => {
    trigger({ avatar: ' ' })
  }

  return (
    <>
      <StyledAvatarGroup>
        <Upload
          showUploadList={false}
          accept="image/*"
          customRequest={handleUploadAvatar}
        >
          <Avatar
            shape="square"
            size={96}
            icon={<ProfileAvatarImage avatar={avatar} isLoading={isLoading} />}
          />
        </Upload>
        {avatar && <StyledCloseCircleTwoTone onClick={handleDeleteAvatar} />}
      </StyledAvatarGroup>
      <ErrorMessageHandler serverError={serverError} textError={customError} />
    </>
  )
}
