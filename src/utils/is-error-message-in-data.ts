type ErrorMessageInData = {
  status: number
  data: { error: string }
}
// TODO rename to isErrorTypeMessage
export const isErrorMessageInData = (
  error: unknown
): error is ErrorMessageInData => {
  return (
    typeof error === 'object' &&
    error != null &&
    'status' in error &&
    'data' in error &&
    typeof (error.data as any).error === 'string'
  )
}
