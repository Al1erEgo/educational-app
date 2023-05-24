import { EditOutlined } from '@ant-design/icons'
import { Button, Space } from 'antd'
import styled from 'styled-components'

export const StyledProfileNameCloseButton = styled(Button).attrs({
  danger: true,
})`
  height: 32px;
  width: 45px;
  font-size: 9px;
  font-weight: bold;
  align-items: center;
  padding: 0;
`

export const StyledProfileNameSubmitButton = styled(Button).attrs({
  htmlType: 'submit',
})`
  height: 32px;
  width: 45px;
  font-size: 9px;
  font-weight: bold;
  align-items: center;
  padding: 0;
  border: 1px solid #1677ff;
`

export const StyledSpaceCompactProfileName = styled(Space.Compact)`
  width: 250px;
  height: 30px;
  margin-bottom: 25px;
`

export const StyledEditOutlinedProfileName = styled(EditOutlined)`
  color: blue;
  cursor: pointer;
  font-size: 16px;
`
