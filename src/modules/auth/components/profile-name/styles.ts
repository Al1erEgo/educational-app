import { Button } from 'antd'
import styled from 'styled-components'

export const StyledProfileNameButton = styled(Button)`
  height: 32px;
  width: 45px;
  font-size: 9px;
  font-weight: bold;
  align-items: center;
  padding: 0;
`

export const StyledProfileName = styled.span`
  margin-right: 7px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.7rem;
  overflow: hidden;
  text-overflow: ellipsis;
`
