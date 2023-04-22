import { PackTableParamsType } from '../types'

export const getSortParam = (tableParams: PackTableParamsType) => {
  if (tableParams.order && tableParams.field) {
    const sortOrder = tableParams.order === 'ascend' ? 0 : 1

    return sortOrder + tableParams.field.toString()
  }
}
