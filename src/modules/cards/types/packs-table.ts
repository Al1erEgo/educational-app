import React from 'react'

import { SorterResult } from 'antd/es/table/interface'
import { TablePaginationConfig } from 'antd/es/table/InternalTable'

import { BaseTableDataType } from '@/modules/cards/types/cards-table-data'
import { HandlePacksTableChangeType } from '@/modules/cards/types/packs-handler-functions'

export type PackType = {
  key?: string
  _id: string
  user_id?: string
  name: string
  cardsCount?: number
  created?: string
  updated?: string
  user_name?: string
  isPrivate: boolean
  deckCover: string
}

export type PacksTableDataColumnsType = {
  title: string
  dataIndex: string
  sorter?: boolean
  width?: string
  ellipsis?: boolean
  render?: (text: string, record: PackType) => React.ReactElement
}

export type PacksTableParamsType = SorterResult<PackType> & {
  pagination?: TablePaginationConfig
  searchValue: string
  minSlider: number | undefined
  maxSlider: number | undefined
  activeButton: string
}

export type PacksTableDataType = BaseTableDataType & {
  handleTableChange: HandlePacksTableChangeType
  tableParams: PacksTableParamsType
  formattedTableData: PackType[] | undefined
  tableColumns: PacksTableDataColumnsType[]
  minCardsCountValue: number | undefined
  maxCardsCountValue: number | undefined
}

export type HandleSliderChangeType = (value: number | [number, number]) => void
export type HandleToggleButtonType = (buttonName: string) => void
export type HandleClearFiltersType = () => void
