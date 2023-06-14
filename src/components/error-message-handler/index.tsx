import { FC } from 'react'

import { StyledErrorText } from '@/components/error-message-handler/styles'
import { isErrorHTMLInData, isErrorMessageInData } from '@/utils'

type ErrorServerHandlerType = {
  serverError: unknown
  textError?: string
}

export const ErrorMessageHandler: FC<ErrorServerHandlerType> = ({ serverError, textError }) => {
  let errorMessage = ''

  if (isErrorHTMLInData(serverError)) {
    errorMessage = serverError.data.match(/<pre>(.*?)<\/pre>/)?.[1] || ''
  }

  if (isErrorMessageInData(serverError)) {
    errorMessage = serverError.data.error
  }

  return <StyledErrorText>{errorMessage || textError}</StyledErrorText>
}
