import { FilterValue, SorterResult } from 'antd/es/table/interface'
import { TablePaginationConfig } from 'antd/es/table/InternalTable'

export type HandleTableChangeType = (
  pagination: TablePaginationConfig,
  filters: Record<string, FilterValue | null>,
  sorter: SorterResult<TableCardType> | SorterResult<TableCardType>[]
) => void

export type GetTableHeightType = (windowInnerHeight: number) => number

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
  searchValue: string
}

export type TableCardType = CardType & {
  key: string
}
