import { UserOutlined, LogoutOutlined } from '@ant-design/icons'
import { Avatar, Upload } from 'antd'
import { useNavigate } from 'react-router-dom'

import arrowBack from '../../../assets/arrow-back.svg'
import { ErrorServerHandler } from '../../../components/error-handler/error-server-handler'
import { MAIN_PATH } from '../../../constants'
import { isFetchBaseQueryError } from '../../../utils'
import { useAuthMeLogOutMutation, useAuthMeUpdateMutation } from '../auth-api'
import { AUTH_PATH } from '../constants'
import { useAuthorised } from '../hooks'
import { cardHeadStyle, StyledCard } from '../styles'

import {
  StyledBackToCardLink,
  StyledProfileContainer,
  StyledProfileImg,
  StyledProfileParagraph,
  StyledProfileText,
  StylesAvatarGroup,
  StyledProfileLogOutButton,
} from './styles'

export const Profile = () => {
  const navigate = useNavigate()

  const { data: userData } = useAuthorised()

  const { name: userName = '', email: userEmail = '' } = userData ?? {}

  const [
    updateUserName,
    { data: updatedUserData, isLoading: isUpdating, error: updateUserNameError },
  ] = useAuthMeUpdateMutation()

  const [logout, { isLoading: isLoggingOut }] = useAuthMeLogOutMutation()

  const handleUserNameChange = async (value: string) => {
    try {
      await updateUserName({ name: value }).unwrap()
    } catch (e: unknown) {
      if (isFetchBaseQueryError(e)) {
        return e
      }
    }
  }

  const handleLogout = async () => {
    await logout({})
    navigate(`${MAIN_PATH.Auth}${AUTH_PATH.SignIn}`)
  }

  return (
    <>
      <StyledBackToCardLink to={`${MAIN_PATH.Cards}`}>
        <StyledProfileImg src={arrowBack} alt="arrow-back" />
        Back to card pack
      </StyledBackToCardLink>
      <StyledCard title={'Personal information'} headStyle={cardHeadStyle}>
        <StyledProfileContainer>
          <StylesAvatarGroup>
            <Upload showUploadList={false} beforeUpload={() => false} accept="image/*">
              <Avatar shape="square" size={96} icon={<UserOutlined />} />
            </Upload>
          </StylesAvatarGroup>

          <StyledProfileParagraph
            editable={{ onChange: handleUserNameChange }}
            disabled={isUpdating}
          >
            {updatedUserData?.updatedUser.name ?? userName}
          </StyledProfileParagraph>

          <ErrorServerHandler error={updateUserNameError} />

          <StyledProfileText>{userEmail}</StyledProfileText>

          <StyledProfileLogOutButton
            onClick={handleLogout}
            loading={isLoggingOut}
            icon={<LogoutOutlined />}
          >
            Log out
          </StyledProfileLogOutButton>
        </StyledProfileContainer>
      </StyledCard>
    </>
  )
}
