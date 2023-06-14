import { FC } from 'react'

import { StyledErrorText } from '@/components/error-message/styles'
import { isErrorTypeHTML, isErrorTypeMessage } from '@/utils'

type ErrorMessageProps = {
  serverError: unknown
  textError?: string
}

export const ErrorMessage: FC<ErrorMessageProps> = ({ serverError, textError }) => {
  let errorMessage = ''

  if (isErrorTypeHTML(serverError)) {
    errorMessage = serverError.data.match(/<pre>(.*?)<\/pre>/)?.[1] || ''
  }

  if (isErrorTypeMessage(serverError)) {
    errorMessage = serverError.data.error
  }

  return <StyledErrorText>{errorMessage || textError}</StyledErrorText>
}
