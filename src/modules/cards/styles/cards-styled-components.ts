import { Button, Typography } from 'antd'
import Title from 'antd/es/typography/Title'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const { Text } = Typography

export const StyledPacksHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`

export const StyledTitle = styled(Title).attrs({
  level: 2,
})`
  text-align: center;
  margin: 0;
`

//TODO проверить надо ли оставить лоадинг условие
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
export const StyledBackToCardLink = styled(NavLink)`
  position: absolute;
  top: 30px;
  text-decoration: none;
  color: black;
  line-height: 1.5rem;
  margin-bottom: 20px;

  &:hover {
    opacity: 0.7;
  }
`

export const StyledArrowImg = styled.img`
  margin-right: 0.5rem;
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

export const StyledLearnButton = styled(Button).attrs({
  type: 'primary',
  htmlType: 'submit',
  size: 'large',
})`
  font-weight: 500;
  margin-left: 10px;
  width: 18rem;
  align-self: center;
`
