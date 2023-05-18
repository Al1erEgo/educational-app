import { FilterValue, SorterResult } from 'antd/es/table/interface'
import { TablePaginationConfig } from 'antd/es/table/InternalTable'

import { PackType } from './packs-table'

export type HandlePacksTableChangeType = (
  pagination: TablePaginationConfig,
  filters: Record<string, FilterValue | null>,
  sorter: SorterResult<PackType> | SorterResult<PackType>[]
) => void

export type HandlePacksSearchType = (searchValue: string) => void
