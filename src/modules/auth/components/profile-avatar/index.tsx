import { Avatar, Skeleton, Upload } from 'antd'
import { RcFile } from 'antd/lib/upload'

import { useAuthMeUpdateMutation } from '../../api'
import { StyledAvatarGroup } from '../../pages/profile/styles'
import { getBase64 } from '../../utils/get-base-64'

type PropsType = {
  avatar: string
}

export const ProfileAvatar = ({ avatar }: PropsType) => {
  const [trigger, { isLoading }] = useAuthMeUpdateMutation('avatar')

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
    <StyledAvatarGroup>
      <Upload showUploadList={false} accept="image/*" customRequest={uploadHandler}>
        <Avatar
          shape="square"
          size={96}
          icon={
            isLoading ? (
              <Skeleton.Image active />
            ) : (
              <img src={avatar} alt="avatar" style={{ width: '100%' }} />
            )
          }
        />
      </Upload>
    </StyledAvatarGroup>
  )
}
