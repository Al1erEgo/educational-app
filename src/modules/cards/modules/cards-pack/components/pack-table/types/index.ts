import { FilterValue, SorterResult } from 'antd/es/table/interface'
import { TablePaginationConfig } from 'antd/es/table/InternalTable'

import { CardsResponseType } from '../../../../../api'

export type HandleTableChangeType = (
  pagination: TablePaginationConfig,
  filters: Record<string, FilterValue | null>,
  sorter: SorterResult<TableCardType> | SorterResult<TableCardType>[]
) => void

export type PackTablePropsType = {
  data: CardsResponseType | undefined
  tableParams: PackTableParamsType
  isLoading: boolean
  onTableChange: HandleTableChangeType
}

export type PackTableColumnsType = {
  title: string
  dataIndex: string
  sorter?: boolean
  width?: string
  render?: (text: string, record: TableCardType) => JSX.Element
}

export type CardType = {
  question: string
  answer: string
  updated: string
  grade: number
}

export type PackTableParamsType = SorterResult<TableCardType> & {
  pagination?: TablePaginationConfig
}

export type TableCardType = CardType & {
  key: string
}
