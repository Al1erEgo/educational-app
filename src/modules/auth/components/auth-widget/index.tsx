import React from 'react'

import { LogoutOutlined } from '@ant-design/icons'
import { useLocation, useNavigate } from 'react-router-dom'

import { MAIN_PATH } from '../../../../constants'
import { useAuthMeLogOutMutation } from '../../auth-api'
import { AUTH_PATH } from '../../constants'
import { useAuthorised } from '../../hooks'
import { useSubmit } from '../../hooks/use-submit'

// import { WidgetButton } from './WidgetButton'
import { WidgetProfile } from './WidgetProfile'
import styled from "styled-components";
import {Button} from "antd";

export const AuthWidget = () => {
  const [logout, { isLoading: isLoggingOut }] = useAuthMeLogOutMutation()
  const navigate = useNavigate()
  const { isAuthorised, data: userData } = useAuthorised()

  const goToProfileHandler = () => {
    navigate(`${MAIN_PATH.Auth}${AUTH_PATH.Profile}`)
  }
  const goToSignInHandler = () => {
    navigate(`${MAIN_PATH.Auth}${AUTH_PATH.SignIn}`)
  }
  const goToSignUpHandler = () => {
    navigate(`${MAIN_PATH.Auth}${AUTH_PATH.SignUp}`)
  }

  const goToLogoutHandler = useSubmit(logout, `${MAIN_PATH.Auth}${AUTH_PATH.SignIn}`)

  const location = useLocation()

  const buttonProps = location.pathname === '/auth/sign-up' ?
      { name: 'Sign in', onClick: goToSignInHandler} :
      { name: 'Sign up', onClick: goToSignUpHandler}


    return (
        isAuthorised ?
      <>
        <WidgetProfile onClick={goToProfileHandler} userName={userData?.name} />
        <StyledButton icon={<LogoutOutlined />} onClick={goToLogoutHandler} >Log out</StyledButton>
      </> :
            <StyledButton type={'primary'} {...buttonProps} >{buttonProps.name}</StyledButton>
    )
  }
const StyledButton = styled(Button)`
  width: 100px;
  height: 35px;
`
