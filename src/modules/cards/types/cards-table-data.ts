import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'

export type TableErrorType = FetchBaseQueryError | SerializedError | undefined

export type BaseTableDataType = {
  isDataLoading: boolean
  elementsCount: number
  serverError: TableErrorType
}
