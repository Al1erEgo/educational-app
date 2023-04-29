import { SorterResult } from 'antd/es/table/interface'
import { TablePaginationConfig } from 'antd/es/table/InternalTable'

export type PackTableColumnsType = {
  title: string
  dataIndex: string
  sorter?: boolean
  width?: string
  render?: (text: string, record: CardType) => JSX.Element
}

export type PackTableParamsType = SorterResult<CardType> & {
  pagination?: TablePaginationConfig
  searchValue: string
}

export type CardType = {
  question: string
  answer: string
  updated: string
  grade: number
  key: string
}
