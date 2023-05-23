type ErrorMessageInData = {
  status: number
  data: { error: string }
}
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

type ErrorHTMLInData = {
  status: string
  originalStatus: number
  error: string
  data: string
}
export const isErrorHTMLInData = (error: unknown): error is ErrorHTMLInData => {
  return (
    typeof error === 'object' &&
    error != null &&
    'status' in error &&
    'data' in error &&
    typeof (error as any).data === 'string'
  )
}
