import { FilterValue, SorterResult } from 'antd/es/table/interface'
import { TablePaginationConfig } from 'antd/es/table/InternalTable'

import {
  DeleteCardRequestType,
  DeletedCardsPackRequestType,
  NewCardPacksRequestType,
  NewCardRequestType,
  UpdateCardRequestType,
  UpdateCardsPackRequestType,
} from '@/modules/cards/types/api-dtos'
import { PackCardType } from '@/modules/cards/types/pack-table'

type HandlerFunctionDataType =
  | NewCardRequestType
  | DeleteCardRequestType
  | UpdateCardRequestType
  | NewCardPacksRequestType
  | DeletedCardsPackRequestType
  | UpdateCardsPackRequestType

export type HandlerFunctionType = (data: HandlerFunctionDataType) => void

export type HandleTableChangeType = (
  pagination: TablePaginationConfig,
  filters: Record<string, FilterValue | null>,
  sorter: SorterResult<PackCardType> | SorterResult<PackCardType>[]
) => void

export type HandleSearchType = (searchValue: string) => void

export type HandleSliderChangeType = (value: number | [number, number]) => void
export type HandleToggleButtonType = (buttonName: string) => void
export type HandleClearFiltersType = () => void

export type ButtonsHandlersType = { [key: string]: () => void }
