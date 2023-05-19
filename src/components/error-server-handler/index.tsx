import { FC } from 'react'

import { StyledErrorText } from '../../modules/auth/styles'
import { isErrorJsonInData, isErrorMessageInData } from '../../utils'

type ErrorServerHandlerType = {
  error: unknown
}

export const ErrorServerHandler: FC<ErrorServerHandlerType> = ({ error }) => {
  let errorMessage = ''

  if (isErrorJsonInData(error)) {
    errorMessage = error.data.match(/<pre>(.*?)<\/pre>/)?.[1] || ''
  }

  if (isErrorMessageInData(error)) {
    errorMessage = error.data.error
  }

  return <StyledErrorText>{errorMessage}</StyledErrorText>
}
