import { LogoutOutlined } from '@ant-design/icons'

import {
  StyledProfileContainer,
  StyledProfileLogOutButton,
  StyledProfileText,
} from './styles'

import { ProfileAvatar, ProfileName } from '@/modules/auth/components'
import { useAuthMutation, useAuthorised } from '@/modules/auth/hooks'
import { cardHeadStyle, StyledCard } from '@/modules/auth/styles'
import { BackToCardsButton } from '@/modules/cards/components'

export const Profile = () => {
  const { data: userData } = useAuthorised()
  const { name: userName = '', email: userEmail = '' } = userData ?? {}

  const [handleLogout, { isLoading: isLoggingOut }] = useAuthMutation('logout')

  return (
    <>
      <BackToCardsButton />
      <StyledCard title={'Personal information'} headStyle={cardHeadStyle}>
        <StyledProfileContainer>
          <ProfileAvatar avatar={userData?.avatar} />
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
