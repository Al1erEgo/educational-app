import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'

import { HandleTableChangeType } from '@/modules/cards/types/pack-handlers-functions'
import {
  PackCardType,
  PackTableColumnsType,
  PackTableParamsType,
} from '@/modules/cards/types/pack-table'

export type TableErrorType = FetchBaseQueryError | SerializedError | undefined

//TODO убрать в свой хук
export type TableDataType = {
  isDataLoading: boolean
  handleTableChange: HandleTableChangeType
  tableParams: PackTableParamsType
  formattedTableData: PackCardType[] | undefined
  tableColumns: PackTableColumnsType[]
  elementsCount: number
  serverError: TableErrorType
}
