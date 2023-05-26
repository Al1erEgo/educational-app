import { Button, Typography } from 'antd'
import styled from 'styled-components'

export const { Text } = Typography

export const StyledProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const StyledProfileText = styled(Text)`
  margin-top: 0.9rem;
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.7rem;
  color: #c2c2c2;
`

export const StyledProfileLogOutButton = styled(Button)`
  margin-top: 1.8rem;
  margin-bottom: 1.7rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`
