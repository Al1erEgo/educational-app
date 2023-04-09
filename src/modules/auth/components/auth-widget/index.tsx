import React from 'react'

import { LogoutOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

import { MAIN_PATH } from '../../../../constants'
import { useAuthMeLogOutMutation } from '../../auth-api'
import { AUTH_PATH } from '../../constants'

export const AuthWidget = () => {
  const [logout, { isLoading: isLoggingOut, error: logoutError }] = useAuthMeLogOutMutation()
  const navigate = useNavigate()
  const goToLogout = async () => {
    await logout({})
    navigate(`${MAIN_PATH.Auth}${AUTH_PATH.SignIn}`)
  }

  return (
    <Button type="primary" onClick={goToLogout} icon={<LogoutOutlined />} loading={isLoggingOut}>
      Log out
    </Button>
  )
}
