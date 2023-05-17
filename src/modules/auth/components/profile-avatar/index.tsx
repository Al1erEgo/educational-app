import React from 'react'

import { Avatar, Upload } from 'antd'
import { RcFile } from 'antd/es/upload'
import { UploadRequestOption } from 'rc-upload/lib/interface'

import { ErrorServerHandler } from '../../../../components'
import { useAuthMeUpdateMutation } from '../../api'
import { StyledAvatarGroup } from '../../pages/profile/styles'
import { StyledErrorText } from '../../styles'
import { getBase64 } from '../../utils'
import { ProfileAvatarImage } from '../profile-avatar-image'

type PropsType = {
  avatar: string
}

export const ProfileAvatar = ({ avatar }: PropsType) => {
  const [trigger, { isLoading, isError, error: serverError }] = useAuthMeUpdateMutation({
    fixedCacheKey: 'avatar',
  })

  const uploadHandler = (action: UploadRequestOption) => {
    if (action.file) {
      const file = action.file as RcFile

      if (file.size < 4000000) {
        getBase64(file, url => {
          trigger({ avatar: url })
        })
      } else {
        console.error('Error: ', 'Файл слишком большого размера')
      }
    }
  }

  return (
    <>
      <StyledAvatarGroup>
        <Upload showUploadList={false} accept="image/*" customRequest={uploadHandler}>
          <Avatar
            shape="square"
            size={96}
            icon={<ProfileAvatarImage avatar={avatar} isLoading={isLoading} />}
          />
        </Upload>
      </StyledAvatarGroup>
      <ErrorServerHandler error={serverError} />
      <StyledErrorText>{isError && 'Size too large!'}</StyledErrorText>
    </>
  )
}
