import { Button, Checkbox } from 'antd'
import styled from 'styled-components'

export const StyledModalCheckbox = styled(Checkbox)`
  margin-top: 8px;
`

export const StyledOkButton = styled(Button).attrs(({ children }) => ({
  type: 'primary',
  ...(children === 'Delete' && { key: 'delete', danger: true }),
}))`
  margin-left: 8px;
`
