import { Button, Checkbox } from 'antd'
import styled from 'styled-components'

export const StyledModalButtonsWrapper = styled.div`
  margin-top: 16px;
  text-align: right;

  & > button {
    margin-left: 8px;
  }
`
export const StyledModalCheckbox = styled(Checkbox)`
  margin-top: 8px;
`

export const StyledModalOkButton = styled(Button).attrs(({ children }) => ({
  type: 'primary',
  ...(children === 'Delete' && { key: 'delete', danger: true }),
}))``
