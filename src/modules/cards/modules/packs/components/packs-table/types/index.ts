import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { FilterValue, SorterResult } from 'antd/es/table/interface'
import { TablePaginationConfig } from 'antd/es/table/InternalTable'

import {
  CardPacksResponseType,
  DeletedCardsPackRequestType,
  NewCardPacksRequestType,
  UpdateCardsPackRequestType,
} from '../../../../../api'
import { TableErrorType } from '../../../../../types'
import { usePacksMutation } from '../hooks/use-packs-mutation'

export type PackType = {
  _id: string
  name: string
  cardsCount: number
  updated: string
  user_name: string
  user_id: string
}

export type PacksTableDataColumnsType = {
  title: string
  dataIndex: string
  sorter?: boolean
  render?: (text: string, record: PackType) => JSX.Element
}

export type PacksTableParamsType = SorterResult<PackType> & {
  pagination?: TablePaginationConfig
  searchValue: string
}

export type SorterType = {
  field?: string
  order?: 'ascend' | 'descend'
}

type HandlerFunctionPacksDataType =
  | NewCardPacksRequestType
  | DeletedCardsPackRequestType
  | UpdateCardsPackRequestType

export type HandlerPacksFunctionType = (data: HandlerFunctionPacksDataType) => void

export type HandlePacksTableChangeType = (
  pagination: TablePaginationConfig,
  filters: Record<string, FilterValue | null>,
  sorter: SorterResult<PackType> | SorterResult<PackType>[]
) => void

export type HandlePacksSearchType = (searchValue: string) => void

export type ActionsHandlersType = { [key: string]: () => void }

export type MutationsPackObjType = { [key: string]: ReturnType<typeof usePacksMutation> }

export type MutationsWithConditionsPackType = [MutationsPackObjType, boolean, TableErrorType]

export type PacksTableErrorType = FetchBaseQueryError | SerializedError | undefined

export type PacksTableDataType = {
  isPacksDataLoading: boolean
  handlePacksTableChange: HandlePacksTableChangeType
  packsTableParams: PacksTableParamsType
  data: CardPacksResponseType | undefined
  packsTableColumns: PacksTableDataColumnsType[]
  serverError: PacksTableErrorType
}
