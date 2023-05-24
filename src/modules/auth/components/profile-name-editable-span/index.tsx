import React, { FC } from 'react'

import { StyledUserName } from '../auth-widget/styles'

import { StyledEditOutlinedProfileName } from '@/modules/auth/components/profile-name/styles'
import { ProfileNameBaseType } from '@/modules/auth/types/profile-name'

export const ProfileNameEditableSpan: FC<ProfileNameBaseType> = ({ userName, switchEdit }) => {
  return (
    <span style={{ marginBottom: '52px' }}>
      <StyledUserName
        style={{ fontSize: '1.2em' }}
        onClick={() => {
          switchEdit()
        }}
      >
        {userName}
      </StyledUserName>
      <StyledEditOutlinedProfileName
        onClick={() => {
          switchEdit()
        }}
      />
    </span>
  )
}
