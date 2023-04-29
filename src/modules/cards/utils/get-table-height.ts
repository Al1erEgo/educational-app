export type GetTableHeightType = (windowInnerHeight: number) => number

export const getTableHeight: GetTableHeightType = windowInnerHeight => {
  const tableHeight = windowInnerHeight - 400

  return tableHeight > 100 ? tableHeight : 100
}
