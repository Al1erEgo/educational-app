import { useState } from 'react'

import { RcFile } from 'antd/es/upload'
import { UploadRequestOption } from 'rc-upload/lib/interface'

import { useAuthMeUpdateMutation } from '@/modules/auth/api'
import { getBase64 } from '@/modules/auth/utils'

// TODO move components related hooks to components folders
export const useProfileAvatarData = () => {
  const [customError, setCustomError] = useState<string>('')
  const [trigger, { isLoading, error: serverError }] = useAuthMeUpdateMutation({
    fixedCacheKey: 'avatar',
  })

  const handleUploadAvatar = (action: UploadRequestOption) => {
    if (action.file) {
      const file = action.file as RcFile

      if (file.size < 1100000) {
        getBase64(file, url => {
          trigger({ avatar: url })
        })
      } else {
        setCustomError('Image Too Large, should be less than 100kb!')
      }
    }
  }

  const handleDeleteAvatar = () => {
    trigger({ avatar: ' ' })
  }

  return {
    handleDeleteAvatar,
    handleUploadAvatar,
    customError,
    isLoading,
    serverError,
  }
}
