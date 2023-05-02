import { UserOutlined } from '@ant-design/icons'
import { Avatar, Upload } from 'antd'

import { StyledAvatarGroup } from '../../pages/profile/styles'

export const ProfileAvatar = () => {
  return (
    <StyledAvatarGroup>
      <Upload showUploadList={false} beforeUpload={() => false} accept="image/*">
        <Avatar shape="square" size={96} icon={<UserOutlined />} />
      </Upload>
    </StyledAvatarGroup>
  )
}
