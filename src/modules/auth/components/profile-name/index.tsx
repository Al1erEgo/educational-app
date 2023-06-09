import { FC, useState } from 'react'

import { ProfileNameInput } from '../profile-name-input'

import { ProfileNameEditableSpan } from '@/modules/auth/components/profile-name-editable-span'
import { ProfileNameBaseType } from '@/modules/auth/types/profile-name'

type ProfileNameType = Omit<ProfileNameBaseType, 'switchEdit'>

export const ProfileName: FC<ProfileNameType> = ({ userName }) => {
  const [isEdit, setIsEdit] = useState(false)

  const handleEdit = () => setIsEdit(true)
  const handleFinish = () => setIsEdit(false)

  if (isEdit) {
    return <ProfileNameInput userName={userName} switchEdit={handleFinish} />
  }

  return <ProfileNameEditableSpan userName={userName} switchEdit={handleEdit} />
}
