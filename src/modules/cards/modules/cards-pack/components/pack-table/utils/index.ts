import { GetTableHeightType, PackTableParamsType } from '../types'

export const getSortParam = (tableParams: PackTableParamsType) => {
  if (tableParams.order && tableParams.field) {
    const sortOrder = tableParams.order === 'ascend' ? 0 : 1

    return sortOrder + tableParams.field.toString()
  }
}

export const getTableHeight: GetTableHeightType = windowInnerHeight => {
  const tableHeight = windowInnerHeight - 400

  return tableHeight > 100 ? tableHeight : 100
}
