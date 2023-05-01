import React, { FC } from 'react'

import { CardsTableConditionProvider } from '../../../../components'
import { useTableResize } from '../../../../hooks'
import { StyledCardTable } from '../../../../styles'

import { PacksTableDataType } from './types'
import { getFormattedPacksTableData } from './utils/get-formatted-packs-table-data'

type PacksTableProps = {
  packsTableData: PacksTableDataType
}
export const PacksTable: FC<PacksTableProps> = ({ packsTableData }) => {
  const {
    data,
    packsTableColumns,
    handlePacksTableChange,
    packsTableParams,
    isPacksDataLoading,
    serverError,
  } = packsTableData

  const tableHeight = useTableResize()

  const formattedPacksTableData = getFormattedPacksTableData(data)

  return (
    <CardsTableConditionProvider serverError={serverError} isPackDataLoading={isPacksDataLoading}>
      <StyledCardTable
        size={'small'}
        columns={packsTableColumns}
        dataSource={formattedPacksTableData}
        onChange={handlePacksTableChange}
        sortDirections={['ascend', 'descend', null]}
        pagination={{
          ...packsTableParams.pagination,
          pageSizeOptions: ['10', '20', '50'],
          showQuickJumper: true,
          total: data?.cardPacksTotalCount || 0,
          showSizeChanger: true,
        }}
        scroll={{ y: tableHeight, scrollToFirstRowOnChange: true }}
      />
    </CardsTableConditionProvider>
  )
}
