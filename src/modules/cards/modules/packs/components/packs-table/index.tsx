import React, { FC } from 'react'

import { Skeleton } from 'antd'
import { FilterValue, SorterResult } from 'antd/es/table/interface'
import { TablePaginationConfig } from 'antd/lib'

import { ErrorServerHandler } from '../../../../../../components'
import { StyledErrorText } from '../../../../../auth/styles'
import { CardPacksResponseType } from '../../../../api'
import { useTableResize } from '../../../../hooks'
import { StyledCardTable } from '../../../../styles'

import { PackType, SorterType } from './types'
import { getFormattedPacksTableData } from './utils/get-formatted-packs-table-data'
import { getPacksTableColumns } from './utils/get-packs-table-columns'

type PacksTableProps = {
  data: CardPacksResponseType
  activeButton: string
  handlePageChange: (page: number, pageCount?: number) => void
  handleSortChange: (
    pagination: TablePaginationConfig,
    filter: Record<string, FilterValue | null>,
    sorter: SorterResult<SorterType> | SorterResult<SorterType>[]
  ) => void
  sortPacks: string
  handleLearn: (record: PackType) => void
  handleEdit: (record: PackType) => void
  handleDelete: (record: PackType) => void
  currentPage: number
  pageCount: number
  userData: any
  isError: boolean
  error: any
  isLoading: boolean
  isFetching: boolean
}

export const PacksTable: FC<PacksTableProps> = ({
  activeButton,
  handlePageChange,
  handleSortChange,
  handleLearn,
  handleEdit,
  handleDelete,
  currentPage,
  pageCount,
  userData,
  isError,
  error,
  data,
  isLoading,
  isFetching,
}) => {
  const tableHeight = useTableResize()

  const formattedPacksTableData = getFormattedPacksTableData(data)

  const packsTableColumns = getPacksTableColumns(
    activeButton,
    userData,
    handleLearn,
    handleEdit,
    handleDelete
  )

  if (isError) {
    return <ErrorServerHandler error={error} />
  }

  if (!isLoading && !isError && !data?.cardPacks.length) {
    return <StyledErrorText>No packs were found (:</StyledErrorText>
  }

  return (
    <>
      {isLoading || isFetching ? (
        <Skeleton paragraph={{ rows: 10 }} active />
      ) : (
        <StyledCardTable
          size={'small'}
          columns={packsTableColumns}
          dataSource={formattedPacksTableData}
          onChange={handleSortChange}
          pagination={{
            pageSizeOptions: ['10', '20', '50'],
            showQuickJumper: true,
            onChange: handlePageChange,
            total: data?.cardPacksTotalCount || 0,
            current: currentPage,
            pageSize: pageCount,
            showSizeChanger: true,
          }}
          scroll={{ y: tableHeight, scrollToFirstRowOnChange: true }}
        />
      )}
    </>
  )
}
