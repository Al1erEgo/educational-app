import React from 'react'

import { SorterResult } from 'antd/es/table/interface'
import { TablePaginationConfig } from 'antd/es/table/InternalTable'

export type PackTableColumnsType = {
  title: string
  dataIndex: string | string[]
  sorter?: boolean
  width?: string
  render?: (text: string, record: PackCardType) => React.ReactElement
}

export type PackTableParamsType = SorterResult<PackCardType> & {
  pagination?: TablePaginationConfig
  searchValue: string
}

export type PackCardType = {
  question: string
  answer: string
  questionImg?: string
  answerImg?: string
  updated: string
  grade: number
  key: string
}
