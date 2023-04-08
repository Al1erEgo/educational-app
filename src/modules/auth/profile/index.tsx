import { UserOutlined, LogoutOutlined } from '@ant-design/icons'
import { Avatar, Button, notification, Typography, Upload } from 'antd'
import { NavLink, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { MAIN_PATH } from '../../../constants'
import { isFetchBaseQueryError } from '../../../utils'
import {
  useAuthMeLogOutMutation,
  useAuthMeQuery,
  useAuthMeUpdateMutation,
  useLazyAuthMeQuery,
} from '../auth-api'
import { AUTH_PATH } from '../constants'
import { cardHeadStyle, StyledCard } from '../styles'

import arrow from './arrow-back.svg'

export const { Text, Paragraph } = Typography

export const Profile = () => {
  const { data: userData, isFetching, error: userQueryError } = useAuthMeQuery()
  const [
    updateUserName,
    { data: updatedUserData, isLoading: isUpdating, error: updateUserNameError },
  ] = useAuthMeUpdateMutation()
  const [logout, { isLoading: isLoggingOut, error: logoutError }] = useAuthMeLogOutMutation()
  const [trigger, { isLoading: prodLoading, error: prodError, data: prodData }] =
    useLazyAuthMeQuery()
  const navigate = useNavigate()

  let someError
  const handleUserNameChange = async (value: string) => {
    try {
      await updateUserName({ name: value }).unwrap()
    } catch (e: unknown) {
      if (isFetchBaseQueryError(updateUserNameError)) {
        someError = updateUserNameError.data.error
      }

      /*if (userQueryError || updateUserNameError || logoutError) {
        if (isFetchBaseQueryError(userQueryError)) {
          console.log('userQueryError', userQueryError)
          notification.error({
            message: userQueryError.data.error,
            placement: 'top',
          })
        }
        if (isFetchBaseQueryError(updateUserNameError)) {
          notification.error({
            message: updateUserNameError.data.error,
            placement: 'top',
          })
        }
        if (isFetchBaseQueryError(logoutError)) {
          notification.error({
            message: logoutError.data.error,
            placement: 'top',
          })
        }
      }*/
    }
  }

  const handleLogout = async () => {
    await logout({})
    navigate(`${MAIN_PATH.Auth}${AUTH_PATH.SignIn}`)
  }

  const userName = userData?.name ?? ''
  const userEmail = userData?.email ?? ''

  if (!userData) navigate(`${MAIN_PATH.Auth}${AUTH_PATH.SignIn}`)

  return (
    <>
      <StyledBackToCardLink to={`${MAIN_PATH.Cards}`}>
        {someError && <div>{someError}</div>}
        <StyledProfileImg src={arrow} alt="arrow-back" />
        Back to card pack
      </StyledBackToCardLink>
      <StyledCard title={'Personal information'} headStyle={cardHeadStyle}>
        <StyledProfileContent>
          <StylesAvatarGroup>
            <Avatar shape="square" size={96} icon={<UserOutlined />} />
            <Upload></Upload>
          </StylesAvatarGroup>

          <StyledProfileParagraph
            editable={{ onChange: handleUserNameChange }}
            disabled={isFetching || isUpdating}
          >
            {userName}
          </StyledProfileParagraph>

          <StyledProfileText>{userEmail}</StyledProfileText>

          <StyledProfileButton
            onClick={handleLogout}
            loading={isLoggingOut}
            icon={<LogoutOutlined />}
          >
            Log out
          </StyledProfileButton>
        </StyledProfileContent>
      </StyledCard>
    </>
  )
}

const StyledBackToCardLink = styled(NavLink)`
  display: block;
  text-align: start;
  text-decoration: none;
  color: black;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 500;
  margin-left: 5rem;

  &:hover {
    color: black;
    opacity: 0.7;
  }
`

const StyledProfileImg = styled.img`
  margin-right: 0.5rem;
`

const StyledProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const StylesAvatarGroup = styled(Avatar.Group)`
  margin-bottom: 24px;
`

const StyledProfileParagraph = styled(Paragraph)`
  margin-top: 0.9rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.7rem;
  text-align: center;
  width: 90%;
  margin-left: 1.4rem;
`

const StyledProfileText = styled(Text)`
  margin-top: 0.9rem;
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.7rem;
  color: #c2c2c2;
`

const StyledProfileButton = styled(Button)`
  margin-top: 1.8rem;
  margin-bottom: 1.7rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`
