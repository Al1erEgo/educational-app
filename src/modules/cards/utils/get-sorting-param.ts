import { SorterResult } from 'antd/es/table/interface'

type GetSortingParamType = <T>(
  tableParams: SorterResult<T>
) => string | undefined

export const getSortingParam: GetSortingParamType = tableParams => {
  if (tableParams.order && tableParams.field) {
    const sortOrder = tableParams.order === 'ascend' ? 0 : 1

    return sortOrder + tableParams.field.toString()
  }
}
