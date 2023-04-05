import { Card } from 'antd'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 80px;
  margin: 0;
`

export const StyledCard = styled(Card)`
  width: 100%;
  max-width: 26rem;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

export const StyledP = styled.p`
  display: block;
  text-align: center;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 0.7rem;
  line-height: 24px;
`

export const StyledNavLink = styled(NavLink)`
  display: block;
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  line-height: 24px;
`
