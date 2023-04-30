import { FilterValue, SorterResult } from 'antd/es/table/interface'
import { TablePaginationConfig } from 'antd/es/table/InternalTable'

import {
  DeleteCardRequestType,
  NewCardRequestType,
  UpdateCardRequestType,
  UpdateCardsPackRequestType,
} from '../../../api'

import { CardType } from './index'

type HandlerFunctionDataType =
  | NewCardRequestType
  | DeleteCardRequestType
  | UpdateCardRequestType
  | UpdateCardsPackRequestType

export type HandlerFunctionType = (data: HandlerFunctionDataType) => void

export type HandleTableChangeType = (
  pagination: TablePaginationConfig,
  filters: Record<string, FilterValue | null>,
  sorter: SorterResult<CardType> | SorterResult<CardType>[]
) => void

export type HandleSearchType = (searchValue: string) => void

export type ButtonsHandlersType = { [key: string]: () => void }
