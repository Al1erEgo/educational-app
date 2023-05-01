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
  key: string
  _id?: string
  user_id?: string
  name?: string
  cardsCount?: number
  created?: string
  updated?: string
  user_name?: string
}
// TODO: ИСПРАВИТЬ ТИП PackType
export type PacksTableDataColumnsType = {
  title: string
  dataIndex: string
  sorter?: boolean
  width?: string
  render?: (text: string, record: any) => JSX.Element
}

export type PacksTableParamsType = SorterResult<PackType> & {
  pagination?: TablePaginationConfig
  searchValue: string
  minCardsCount: number | undefined
  maxCardsCount: number | undefined
  activeButton: string
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
  handlePacksTableChange: any
  packsTableParams: PacksTableParamsType
  data: CardPacksResponseType | undefined
  packsTableColumns: PacksTableDataColumnsType[]
  serverError: PacksTableErrorType
}

export type HandleAddNewPackType = () => void | Promise<void>

export type HandleSliderChangeType = (value: number | [number, number]) => void

export type HandleToggleButtonType = (buttonName: string) => void

export type HandleClearFiltersType = () => void
