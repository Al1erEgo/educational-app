import React from 'react'

import { FilterValue, SorterResult } from 'antd/es/table/interface'
import { TablePaginationConfig } from 'antd/es/table/InternalTable'

import {
  DeletedCardsPackRequestType,
  NewCardPacksRequestType,
  UpdateCardsPackRequestType,
} from '../../../api'

import { PackType } from './index'

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

export type SetEditModalFunctionType = React.Dispatch<
  React.SetStateAction<{ open: boolean; id?: string; name?: string }>
>
