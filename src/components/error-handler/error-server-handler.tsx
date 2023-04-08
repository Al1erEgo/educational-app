import { StyledErrorText } from '../../modules/auth/styles'
import { isFetchBaseQueryError } from '../../utils'

export const ErrorServerHandler = ({ error }: { error: unknown }) => {
  if (isFetchBaseQueryError(error)) {
    return <StyledErrorText>{error.data.error}</StyledErrorText>
  }

  return null
}
