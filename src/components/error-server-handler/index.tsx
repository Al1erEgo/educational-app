import { FC } from 'react'

import { StyledErrorText } from '../../modules/auth/styles'
import { isFetchBaseQueryError } from '../../utils'

type ErrorServerHandlerType = {
  error: unknown
}

export const ErrorServerHandler: FC<ErrorServerHandlerType> = ({ error }) => {
  if (isFetchBaseQueryError(error)) {
    return <StyledErrorText>{error.data.error}</StyledErrorText>
  }

  return null
}
