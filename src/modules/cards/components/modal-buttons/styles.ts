import { Button } from 'antd'
import { styled } from 'styled-components'

export const StyledModalButtonsContainer = styled.div`
  margin-top: 16px;
  text-align: right;

  & > button {
    margin-left: 8px;
  }
`

export const StyledModalSubmitButton = styled(Button).attrs(({ children }) => ({
  type: 'primary',
  htmlType: 'submit',
  danger: children === 'Delete',
}))``
