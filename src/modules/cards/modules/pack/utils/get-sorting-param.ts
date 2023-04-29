import { PackTableParamsType } from '../types'

type GetSortingParamType = (tableParams: PackTableParamsType) => string | undefined

export const getSortingParam: GetSortingParamType = tableParams => {
  if (tableParams.order && tableParams.field) {
    const sortOrder = tableParams.order === 'ascend' ? 0 : 1

    return sortOrder + tableParams.field.toString()
  }
}
