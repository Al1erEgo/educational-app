import { FC, useState } from 'react'

import { ProfileNameInput } from '../profile-name-input'

import { ProfileNameEditableSpan } from '@/modules/auth/components/profile-name-editable-span'
import { ProfileNameBaseType } from '@/modules/auth/types/profile-name'

export const ProfileName: FC<Omit<ProfileNameBaseType, 'switchEdit'>> = ({ userName }) => {
  const [isEdit, setIsEdit] = useState(false)

  const handleEdit = () => setIsEdit(true)
  const handleFinish = () => setIsEdit(false)

  return isEdit ? (
    <ProfileNameInput userName={userName} switchEdit={handleFinish} />
  ) : (
    <ProfileNameEditableSpan userName={userName} switchEdit={handleEdit} />
  )
}
