import { LogoutOutlined } from '@ant-design/icons'

import arrowBack from '../../../assets/arrow-back.svg'
import { ErrorServerHandler } from '../../../components'
import { MAIN_PATH } from '../../../constants'
import { useAuthorised, useMutation } from '../hooks'
import { cardHeadStyle, StyledCard } from '../styles'

import { ProfileAvatar } from './components/profile-avatar'
import {
  StyledBackToCardLink,
  StyledProfileContainer,
  StyledProfileImg,
  StyledProfileParagraph,
  StyledProfileText,
  StyledProfileLogOutButton,
} from './styles'

export const Profile = () => {
  const { data: userData } = useAuthorised()
  const { name: userName = '', email: userEmail = '' } = userData ?? {}

  const [onSubmit, { isLoading: isUpdating, error: updateUserNameError }] =
    useMutation('updateUserName')
  const [handleLogout, { isLoading: isLoggingOut }] = useMutation('logout')

  const handleUserNameChange = async (value: string) => {
    await onSubmit({ name: value })
  }

  return (
    <>
      <StyledBackToCardLink to={`${MAIN_PATH.Cards}`}>
        <StyledProfileImg src={arrowBack} alt="arrow-back" />
        Back to cars
      </StyledBackToCardLink>
      <StyledCard title={'Personal information'} headStyle={cardHeadStyle}>
        <StyledProfileContainer>
          <ProfileAvatar />

          <StyledProfileParagraph
            editable={{ onChange: handleUserNameChange }}
            disabled={isUpdating}
          >
            {userName}
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
