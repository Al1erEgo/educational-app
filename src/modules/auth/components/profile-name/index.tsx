import { FC, useState } from 'react'

import { ProfileNameEditableSpan } from './profile-name-editable-span/profile-name-editable-span'
import { ProfileNameInput } from './profile-name-input'

type ProfileNamePropsType = {
  userName: string
}

export const ProfileName: FC<ProfileNamePropsType> = ({ userName }) => {
  const [isEdit, setIsEdit] = useState(false)

  return isEdit ? (
    <ProfileNameInput userName={userName} callback={setIsEdit} />
  ) : (
    <ProfileNameEditableSpan userName={userName} callback={setIsEdit} />
  )
}
