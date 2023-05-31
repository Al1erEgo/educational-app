import React, { FC } from 'react'

import { StyledProfileNameWrapper } from '@/modules/auth/components/profile-name/styles'
import { StyledUserName } from '@/modules/auth/components/profile-widget/styles'
import { ProfileNameBaseType } from '@/modules/auth/types/profile-name'

export const ProfileNameEditableSpan: FC<ProfileNameBaseType> = ({
  userName,
  switchEdit,
}) => {
  return (
    <StyledProfileNameWrapper>
      <StyledUserName
        fontSize={'big'}
        wordBreak={'break-all'}
        border={'none'}
        onClick={switchEdit}
      >
        {userName}
      </StyledUserName>
    </StyledProfileNameWrapper>
  )
}
