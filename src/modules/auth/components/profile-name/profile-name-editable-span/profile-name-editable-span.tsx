import React, { Dispatch, FC, SetStateAction } from 'react'

import { EditOutlined } from '@ant-design/icons'

import { StyledUserName } from '../../auth-widget/styles'

type ProfileNameEditableSpanType = {
  userName: string
  callback: Dispatch<SetStateAction<boolean>>
}

export const ProfileNameEditableSpan: FC<ProfileNameEditableSpanType> = ({
  userName,
  callback,
}) => {
  return (
    <span style={{ marginBottom: '52px' }}>
      <StyledUserName
        style={{ fontSize: '1.2em' }}
        onClick={() => {
          callback(true)
        }}
      >
        {userName}
      </StyledUserName>
      <EditOutlined
        onClick={() => {
          callback(true)
        }}
        style={{ color: 'blue', cursor: 'pointer', fontSize: '16px' }}
      />
    </span>
  )
}
