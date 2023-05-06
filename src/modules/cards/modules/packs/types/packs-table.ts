import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { SorterResult } from 'antd/es/table/interface'
import { TablePaginationConfig } from 'antd/es/table/InternalTable'

import { CardPacksResponseType } from '../../../api'

import { HandlePacksTableChangeType } from './packs-handler-functions'

export type PackType = {
  key?: string
  _id?: string
  user_id?: string
  name?: string
  cardsCount?: number
  created?: string
  updated?: string
  user_name?: string
}

export type PacksTableDataColumnsType = {
  title: string
  dataIndex: string
  sorter?: boolean
  width?: string
  render?: (text: string, record: PackType) => JSX.Element
}

export type PacksTableParamsType = SorterResult<PackType> & {
  pagination?: TablePaginationConfig
  searchValue: string
  minCardsCount: number | undefined
  maxCardsCount: number | undefined
  activeButton: string
}

export type PacksTableErrorType = FetchBaseQueryError | SerializedError | undefined

export type PacksTableDataType = {
  isPacksDataLoading: boolean
  handlePacksTableChange: HandlePacksTableChangeType
  packsTableParams: PacksTableParamsType
  data: CardPacksResponseType | undefined
  packsTableColumns: PacksTableDataColumnsType[]
  serverError: PacksTableErrorType
}

export type HandleAddNewPackType = (
  id?: string,
  name?: string,
  isPrivate?: boolean
) => void | Promise<void>

export type HandleSliderChangeType = (value: number | [number, number]) => void

export type HandleToggleButtonType = (buttonName: string) => void

export type HandleClearFiltersType = () => void
