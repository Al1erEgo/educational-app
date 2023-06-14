type ErrorHTMLInData = {
  status: string
  originalStatus: number
  error: string
  data: string
}
export const isErrorTypeHTML = (error: unknown): error is ErrorHTMLInData => {
  return (
    typeof error === 'object' &&
    error != null &&
    'status' in error &&
    'data' in error &&
    typeof (error as any).data === 'string'
  )
}
