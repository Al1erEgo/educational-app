import { Button } from 'antd'
import styled from 'styled-components'

type UserNameProps = {
  fontSize?: 'big' | 'normal'
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
`
export const StyledUserName = styled.span<UserNameProps>`
  font-size: ${props => (props.fontSize === 'big' ? 120 : 80)}%;
  max-width: 100px;
  max-height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  border-bottom: 1px dashed #1677ff;
  margin-right: 7px;
  font-family: 'Montserrat', sans-serif;
  cursor: pointer;
`
