import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const ForgotPasswordLink = styled(NavLink)`
  display: block;
  margin-left: 65%;
  color: black;
  font-size: 0.85rem;
  font-weight: 500;
  margin-bottom: 1.2rem;

  &:hover {
    color: black;
    opacity: 0.7;
  }
`
