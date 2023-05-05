import { UserOutlined } from '@ant-design/icons'
import { Avatar, Upload } from 'antd'

import { StyledAvatarGroup } from '../../styles'

export const ProfileAvatar = () => {
  return (
    <StyledAvatarGroup>
      <Upload showUploadList={false} beforeUpload={() => console.log('')} accept="image/*">
        <Avatar shape="square" size={96} icon={<UserOutlined />} />
      </Upload>
    </StyledAvatarGroup>
  )
}
