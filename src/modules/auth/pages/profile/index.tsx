import { LogoutOutlined } from '@ant-design/icons'

import arrowBack from '../../../../assets/arrow-back.svg'
import { MAIN_PATH } from '../../../../constants'
import { StyledArrowImg, StyledBackToCardLink } from '../../../../styles'
import { useAuthorised, useAuthMutation } from '../../hooks'
import { cardHeadStyle, StyledCard } from '../../styles'

import { ProfileAvatar, ProfileName } from './components'
import { StyledProfileContainer, StyledProfileText, StyledProfileLogOutButton } from './styles'

export const Profile = () => {
  const { data: userData } = useAuthorised()
  const { name: userName = '', email: userEmail = '' } = userData ?? {}

  const [handleLogout, { isLoading: isLoggingOut }] = useAuthMutation('logout')

  return (
    <>
      <StyledBackToCardLink to={MAIN_PATH.Cards}>
        <StyledArrowImg src={arrowBack} alt="arrow-back" />
        Go to Cards
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
