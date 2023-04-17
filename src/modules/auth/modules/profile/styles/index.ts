import { Avatar, Button, Typography } from 'antd'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const { Text, Paragraph } = Typography

export const StyledBackToCardLink = styled(NavLink)`
  display: block;
  text-align: start;
  text-decoration: none;
  position: absolute;
  top: 100px;
  color: black;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 500;
  left: 14%;

  &:hover {
    color: black;
    opacity: 0.7;
  }
`

export const StyledProfileImg = styled.img`
  margin-right: 0.5rem;
`

export const StyledProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const StyledAvatarGroup = styled(Avatar.Group)`
  margin-bottom: 1.7rem;
`

export const StyledProfileParagraph = styled(Paragraph)`
  margin-top: 0.9rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.7rem;
  text-align: center;
  width: 90%;
  margin-left: 1.4rem;
`

export const StyledProfileText = styled(Text)`
  margin-top: 0.9rem;
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.7rem;
  color: #c2c2c2;
`

export const StyledProfileLogOutButton = styled(Button)`
  margin-top: 1.8rem;
  margin-bottom: 1.7rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`
