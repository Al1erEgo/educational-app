import { Button, Checkbox } from 'antd'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 80px;
  margin: 0;
`

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 26rem;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

export const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
`

export const StyledP = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 0.7rem;
  line-height: 24px;
`

export const StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  line-height: 24px;
`

export const StyledButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 36px;
  background-color: #366eff;
  color: white;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
  margin-top: 1rem;

  &:hover {
    background-color: lightblue;
  }
`
