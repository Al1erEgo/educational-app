type GetTableHeightType = (windowInnerHeight: number) => number

const MIN_TABLE_HEIGHT = 100

const TABLE_OFFSET = 400

export const getTableHeight: GetTableHeightType = windowInnerHeight => {
  const tableHeight = windowInnerHeight - TABLE_OFFSET

  return tableHeight > MIN_TABLE_HEIGHT ? tableHeight : MIN_TABLE_HEIGHT
}
