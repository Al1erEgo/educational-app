import { Button, Table, Typography } from 'antd'
import styled from 'styled-components'
const { Text } = Typography

export const StyledPacksContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10%;
  margin: 0;
`
export const StyledPacksHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`

export const StyledPacksTitleButton = styled(Button)`
  font-weight: 500;
  margin-left: 10px;
  width: 200px;
`

export const StyledPacksToolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`

export const StyledPacksButton = styled.div`
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
