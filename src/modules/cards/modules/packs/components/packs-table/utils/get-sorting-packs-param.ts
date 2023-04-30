import { SorterResult } from 'antd/es/table/interface'
import { TablePaginationConfig } from 'antd/es/table/InternalTable'

import { PackType } from '../types'

export type PacksTableParamsType = SorterResult<PackType> & {
  pagination?: TablePaginationConfig
  searchValue: string
}

type GetSortingPacksParamType = (
  tableParams: SorterResult<PackType> & {
    pagination?: TablePaginationConfig
    searchValue: string
  }
) => string | undefined

export const getSortingPacksParam: GetSortingPacksParamType = tableParams => {
  if (tableParams.order && tableParams.field) {
    const sortOrder = tableParams.order === 'ascend' ? 0 : 1

    return sortOrder + tableParams.field.toString()
  }
}
