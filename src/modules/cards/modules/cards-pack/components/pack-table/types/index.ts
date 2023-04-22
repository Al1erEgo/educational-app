import { SorterResult } from 'antd/es/table/interface'
import { TablePaginationConfig } from 'antd/es/table/InternalTable'

import { CardsResponseType } from '../../../../../api'

export type PackTableType = {
  data: CardsResponseType | undefined
  tableParams: PackTableParams
  isLoading: boolean
  onTableChange: (pagination: TablePaginationConfig, sorter: SorterResult<TableCardType>) => void
}

export type PackTableColumnsType = {
  question: string
  answer: string
  updated: string
  grade: number
}

export type PackTableParams = {
  pagination?: TablePaginationConfig
  sortField?: string
  sortOrder?: string
}

export type TableCardType = PackTableColumnsType & {
  key: string
}
