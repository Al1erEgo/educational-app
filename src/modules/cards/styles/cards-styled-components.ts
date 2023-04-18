import { Table, Typography } from 'antd'
import styled from 'styled-components'
const { Text } = Typography

export const PacksContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10%;
  margin: 0;
`

export const PacksButtonContainer = styled.div`
  width: 14%;
  max-width: 200px;
  margin-right: 14px;
`

export const StyledCardText = styled(Text)`
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
`

export const StyledCardTable = styled(Table)`
  margin-bottom: 24px;
`
