import { Button, Rate, Typography } from 'antd'
import Title from 'antd/es/typography/Title'
import styled from 'styled-components'

const { Text } = Typography

export const StyledTitle = styled(Title).attrs({
  level: 2,
})`
  text-align: center;
  margin: 0;
`

//TODO проверить надо ли оставить лоадинг условие
//TODO перенести в tyles.ts рядом с index.tsx в Packs
export const StyledCardsTitleButton = styled(Button).attrs(props => ({
  type: 'primary',
  htmlType: 'submit',
  size: 'large',
  children: props.loading ? 'Loading...' : props.children,
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

export const StyledCardsText = styled(Text)`
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
`

export const StyledLearnCardButton = styled(Button).attrs({
  type: 'primary',
  htmlType: 'submit',
  size: 'large',
})`
  font-weight: 500;
  margin-left: 10px;
  width: 18rem;
  align-self: center;
`

export const StyledLearnCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 26rem;
  margin: 0 auto;
  padding: 1.5rem;
  gap: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

export const StyledRate = styled(Rate).attrs({
  disabled: true,
})`
  font-size: 0.8rem;
`

export const StyledModalWrapper = styled.div`
  margin-top: 1rem;
`
