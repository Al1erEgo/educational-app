import { UserOutlined } from '@ant-design/icons'
import styled from 'styled-components'

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
export const StyledName = styled.span`
  border-bottom: 1px dashed #1677ff;
  margin-right: 7px;
  font-family: 'Montserrat', sans-serif;
`
export const StyledUserIconWidget = styled(UserOutlined)`
  margin-right: 7px;
  margin-top: 7px;
  width: 23px;
  height: 23px;
  border-radius: 50%;
`
