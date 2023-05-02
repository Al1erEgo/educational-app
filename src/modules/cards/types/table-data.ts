import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'

import { CardsResponseType } from '../api'
import {
  HandleTableChangeType,
  PackTableColumnsType,
  PackTableParamsType,
} from '../modules/pack/types'

export type TableErrorType = FetchBaseQueryError | SerializedError | undefined

//TODO убрать в свой хук
export type TableDataType = {
  isPackDataLoading: boolean
  handleTableChange: HandleTableChangeType
  tableParams: PackTableParamsType
  responseData: CardsResponseType | undefined
  tableColumns: PackTableColumnsType[]
  serverError: TableErrorType
}
