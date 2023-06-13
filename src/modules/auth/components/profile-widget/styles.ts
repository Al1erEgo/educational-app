import { Button } from 'antd'
import styled from 'styled-components'

type UserNameProps = {
  fontSize?: 'big' | 'normal'
  wordbreak?: 'break-all'
  border?: 'none'
}

export const StyledAuthWidgetButton = styled(Button)`
  width: 100px;
  height: 35px;
`

export const StyledUserDataWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: 20px;
`
export const StyledUserName = styled.span<UserNameProps>`
  font-size: ${props => (props.fontSize === 'big' ? 16 : 12)}px;
  border-bottom: ${props => (props.border === 'none' ? 'none' : '1px dashed #1677ff')};
  margin-right: 7px;
  font-family: 'Montserrat', sans-serif;
  cursor: pointer;
  text-align: center;
  word-break: ${props => props.wordbreak};
`
