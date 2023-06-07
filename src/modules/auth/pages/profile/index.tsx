import { LogoutOutlined } from '@ant-design/icons'

import { BackToCardsButton } from '../../../cards/components'
import { ProfileAvatar, ProfileName } from '../../components'
import { useAuthMutation, useAuthorised } from '../../hooks'
import { StyledCard } from '../../styles'

import {
  StyledProfileContainer,
  StyledProfileLogOutButton,
  StyledProfileText,
} from './styles'

export const Profile = () => {
  const { data: userData } = useAuthorised()

  const [handleLogout, { isLoading: isLoggingOut }] = useAuthMutation('logout')

  return (
    <>
      <BackToCardsButton />
      <StyledCard title={'Personal information'}>
        <StyledProfileContainer>
          <ProfileAvatar avatar={userData?.avatar} />
          <ProfileName userName={userData?.userName} />

          <StyledProfileText>{userData?.email}</StyledProfileText>

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
