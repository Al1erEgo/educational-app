import { UserOutlined, LogoutOutlined } from '@ant-design/icons'
import { Avatar, Upload } from 'antd'
import { useNavigate } from 'react-router-dom'

import arrowBack from '../../../assets/arrow-back.svg'
import { MAIN_PATH } from '../../../constants'
import { isErrorWithMessage, isFetchBaseQueryError } from '../../../utils'
import {
  useAuthMeLogOutMutation,
  useAuthMeQuery,
  useAuthMeUpdateMutation,
  useLazyAuthMeQuery,
} from '../auth-api'
import { AUTH_PATH } from '../constants'
import { cardHeadStyle, StyledCard, StyledErrorText } from '../styles'

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
  console.log('profile')
  const navigate = useNavigate()

  const { data: userData, isFetching, error: userQueryError } = useAuthMeQuery()
  const { name: userName = '', email: userEmail = '' } = userData ?? {}

  const [
    updateUserName,
    { data: updatedUserData, isLoading: isUpdating, error: updateUserNameError },
  ] = useAuthMeUpdateMutation()

  const [logout, { isLoading: isLoggingOut, error: logoutError }] = useAuthMeLogOutMutation()

  const [trigger, { isLoading: isLazyAuthMeLoading, error: lazyAuthMeError, data: lazyUserData }] =
    useLazyAuthMeQuery()

  const handleUserNameChange = async (value: string) => {
    try {
      await updateUserName({ name: value }).unwrap()
      await trigger()
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
            disabled={isFetching || isUpdating}
          >
            {userName}
          </StyledProfileParagraph>

          {isFetchBaseQueryError(updateUserNameError) && (
            <StyledErrorText>{updateUserNameError.data.error}</StyledErrorText>
          )}

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
