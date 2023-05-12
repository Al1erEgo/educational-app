import React from 'react'

import { Avatar, Upload } from 'antd'
import { RcFile } from 'antd/lib/upload'

import { useAuthMeUpdateMutation } from '../../api'
import { StyledAvatarGroup } from '../../pages/profile/styles'
import { StyledErrorText } from '../../styles'
import { getBase64 } from '../../utils'
import { ProfileAvatarImage } from '../profile-avatar-image'

type PropsType = {
  avatar: string
}

export const ProfileAvatar = ({ avatar }: PropsType) => {
  const [trigger, { isLoading, isError }] = useAuthMeUpdateMutation({
    fixedCacheKey: 'avatar',
  })

  const uploadHandler = action => {
    if (action.file) {
      const file = action.file

      if (file.size < 4000000) {
        getBase64(file as RcFile, url => {
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
      <StyledErrorText>{isError && 'Size too large!'}</StyledErrorText>
    </>
  )
}
