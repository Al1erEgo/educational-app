import { CloseCircleTwoTone } from '@ant-design/icons'
import { Avatar } from 'antd'
import styled from 'styled-components'

export const StyledCloseCircleTwoTone = styled(CloseCircleTwoTone)`
  position: absolute;
  right: -0.25rem;
  top: -0.25rem;

  :hover {
    font-size: 1rem;
  }
`

export const StyledAvatarGroup = styled(Avatar.Group)`
  margin-bottom: 1.7rem;
  position: relative;

  & :hover {
    cursor: pointer;
  }
`
