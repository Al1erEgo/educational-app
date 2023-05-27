import React, { FC } from 'react'

import {
  StyledEditOutlinedProfileName,
  StyledProfileNameWrapper,
} from '@/modules/auth/components/profile-name/styles'
import { StyledUserName } from '@/modules/auth/components/profile-widget/styles'
import { ProfileNameBaseType } from '@/modules/auth/types/profile-name'

export const ProfileNameEditableSpan: FC<ProfileNameBaseType> = ({
  userName,
  switchEdit,
}) => {
  return (
    <StyledProfileNameWrapper>
      <StyledUserName fontSize={'big'} onClick={switchEdit}>
        {userName}
      </StyledUserName>
      <StyledEditOutlinedProfileName onClick={switchEdit} />
    </StyledProfileNameWrapper>
  )
}
