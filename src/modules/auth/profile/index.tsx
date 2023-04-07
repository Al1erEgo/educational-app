import { UserOutlined, LogoutOutlined } from '@ant-design/icons'
import { Avatar, Badge, Button, Space, Typography } from 'antd'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { MAIN_PATH } from '../../../constants'
import { useAuthMeLogOutMutation, useAuthMeQuery, useAuthMeUpdateMutation } from '../auth-api'
import { AUTH_PATH } from '../constants'
import { cardHeadStyle, StyledCard } from '../styles'

import icon from './photo-icon.svg'

export const { Text, Paragraph } = Typography

export const Profile = () => {
  const { data: userData, isLoading, isError, isSuccess, isFetching } = useAuthMeQuery()
  const [updateUserName, { data: updateUserData, isLoading: isUpdating }] =
    useAuthMeUpdateMutation()
  const [logout, { isLoading: isLoggingOut }] = useAuthMeLogOutMutation()
  const navigate = useNavigate()

  console.log('updateUserData', updateUserData)
  const handleUserNameChange = async (value: string) => {
    await updateUserName({ name: value })
    console.log(value)
  }

  const handleLogout = async () => {
    await logout({})
    navigate(`${MAIN_PATH.Auth}${AUTH_PATH.SignIn}`)
  }

  const userName = userData?.name
  const userEmail = userData?.email

  console.log('isLoading', isLoading)
  console.log(userData)

  return (
    <StyledCard title={'Personal information'} headStyle={cardHeadStyle}>
      <StyledContent>
        <AvatarWrapper>
          <Avatar
            size={96}
            style={{ backgroundColor: '#42b72a', position: 'relative', zIndex: 1 }}
            icon={<UserOutlined />}
          >
            {'user'}
          </Avatar>
          <Avatar src={icon} style={{ position: 'absolute', bottom: 0, right: 0, zIndex: 2 }} />
        </AvatarWrapper>

        {/*       <Avatar.Group style={{ position: 'relative', marginBottom: '24px' }}>
          <Avatar shape="square" size={96} icon={<UserOutlined />}>
            {'user'}
          </Avatar>
          <Avatar src={icon} style={{ position: 'absolute', bottom: -5, right: -5 }} />
        </Avatar.Group>

        <Badge dot={true} style={{ position: 'absolute', bottom: 0, right: 0, zIndex: 2 }}>
          <Avatar
            shape="square"
            size={96}
            icon={<UserOutlined />}
            style={{ position: 'relative', zIndex: 1 }}
          />
        </Badge>*/}

        <StyledParagraph
          editable={{ onChange: handleUserNameChange }}
          disabled={isFetching || isUpdating}
        >
          {userName}
        </StyledParagraph>

        <StyledProfileText>{userEmail}</StyledProfileText>

        <StyledProfileButton
          onClick={handleLogout}
          loading={isLoggingOut}
          icon={<LogoutOutlined />}
        >
          Log out
        </StyledProfileButton>
      </StyledContent>
    </StyledCard>
  )
}

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const AvatarWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
`

const StyledParagraph = styled(Paragraph)`
  margin-top: 14px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  width: 90%;
  margin-left: 1.2rem;
`

const StyledProfileText = styled(Text)`
  margin-top: 14px;
  font-size: 0.8rem;
  font-weight: 400;
  line-height: 24px;
  color: #c2c2c2;
`

const StyledProfileButton = styled(Button)`
  margin-top: 29px;
  margin-bottom: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`
