import { FilterValue } from 'antd/es/table/interface'
import { TablePaginationConfig } from 'antd/es/table/InternalTable'

import { CardsResponseType } from '../../../../../api'

export type PackTablePropsType = {
  data: CardsResponseType
}

export type PackDataTableType = {
  question: string
  answer: string
  updated: string
  grade: number
}

export type PackTableParams = {
  pagination?: TablePaginationConfig
  sortField?: string
  sortOrder?: string
  filters?: Record<string, FilterValue>
}
