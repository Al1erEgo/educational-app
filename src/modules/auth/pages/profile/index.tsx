import { LogoutOutlined } from '@ant-design/icons'

import { BackToCardsButton } from '../../../cards/components'
import { ProfileAvatar, ProfileName } from '../../components'
import { useAuthorised, useAuthMutation } from '../../hooks'
import { cardHeadStyle, StyledCard } from '../../styles'

import { StyledProfileContainer, StyledProfileText, StyledProfileLogOutButton } from './styles'

export const Profile = () => {
  const { data: userData } = useAuthorised()
  const { name: userName = '', email: userEmail = '' } = userData ?? {}

  const [handleLogout, { isLoading: isLoggingOut }] = useAuthMutation('logout')

  return (
    <>
      <BackToCardsButton />
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
