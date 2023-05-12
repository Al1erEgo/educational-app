import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'

import {
  CardType,
  HandleTableChangeType,
  PackTableColumnsType,
  PackTableParamsType,
} from '../modules/pack/types'

export type TableErrorType = FetchBaseQueryError | SerializedError | undefined

//TODO убрать в свой хук
export type TableDataType = {
  isDataLoading: boolean
  handleTableChange: HandleTableChangeType
  tableParams: PackTableParamsType
  formattedTableData: CardType[] | undefined
  tableColumns: PackTableColumnsType[]
  elementsCount: number
  serverError: TableErrorType
}
