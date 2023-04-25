import { Button, Table, Typography } from 'antd'
import Title from 'antd/es/typography/Title'
import styled from 'styled-components'

import { CardsSearchWrapperProps } from '../types'

const { Text } = Typography

export const StyledPacksHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`

export const StyledTitle = styled(Title)`
  margin: 0;
`

export const StyledCardsTitleButton = styled(Button).attrs(props => ({
  type: 'primary',
  htmlType: 'submit',
  size: 'large',
  children: props.children,
}))`
  font-weight: 500;
  margin-left: 10px;
  width: 200px;
`

export const StyledCardsToolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`
export const CardsSearchWrapper = styled.div<CardsSearchWrapperProps>`
  width: ${props => (props.size === 'small' ? 35 : 100)}%;
`

export const StyledPacksButton = styled.div`
  width: 14%;
  max-width: 200px;
  margin: 0 14px;
`

export const StyledCardsText = styled(Text)`
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
`

export const StyledCardTable = styled(Table)`
  margin-bottom: 24px;
`
