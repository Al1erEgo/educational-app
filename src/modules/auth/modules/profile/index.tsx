import { LogoutOutlined } from '@ant-design/icons'

import arrowBack from '../../../../assets/arrow-back.svg'
import { MAIN_PATH } from '../../../../constants'
import { useAuthorised, useMutation } from '../../hooks'
import { cardHeadStyle, StyledCard } from '../../styles'

import { ProfileAvatar, ProfileName } from './components'
import {
  StyledBackToCardLink,
  StyledProfileContainer,
  StyledProfileImg,
  StyledProfileText,
  StyledProfileLogOutButton,
} from './styles'

export const Profile = () => {
  const { data: userData } = useAuthorised()
  const { name: userName = '', email: userEmail = '' } = userData ?? {}

  const [handleLogout, { isLoading: isLoggingOut }] = useMutation('logout')

  return (
    <>
      <StyledBackToCardLink to={MAIN_PATH.Cards}>
        <StyledProfileImg src={arrowBack} alt="arrow-back" />
        Go to cards
      </StyledBackToCardLink>
      <StyledCard title={'Personal information'} headStyle={cardHeadStyle}>
        <StyledProfileContainer>
          <ProfileAvatar />
          <ProfileName userName={userName} />

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
