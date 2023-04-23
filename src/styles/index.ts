import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export * from './global-style'

export const ModuleContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 70px 10% 0 10%;
  position: relative;
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
