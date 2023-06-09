import { Button, Card, Typography } from 'antd'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const { Text } = Typography

export const StyledP = styled.p`
  display: block;
  text-align: center;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 0.7rem;
  line-height: 24px;
`

export const StyledText = styled(Text)`
  display: flex;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 3rem;
  line-height: 24px;
  color: #9d9d9d;
`

export const StyledNavLink = styled(NavLink)`
  display: block;
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  line-height: 24px;
`

export const StyledCard = styled(Card).attrs({
  headStyle: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: '1.5rem',
    marginBottom: '0.6rem',
  },
})`
  width: 100%;
  max-width: 26rem;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

export const StyledAuthButton = styled(Button).attrs({
  type: 'primary',
  htmlType: 'submit',
  size: 'large',
  style: { fontWeight: '500' },
  block: true,
})``
