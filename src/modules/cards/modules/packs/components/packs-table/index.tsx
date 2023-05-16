import React, { FC } from 'react'

import { Table } from 'antd'

import { CardsConditionProvider } from '../../../../components'
import { useTableResize } from '../../../../hooks'
import { PacksTableDataType } from '../../types'
import { getFormattedPacksTableData } from '../../utils'

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
    <CardsConditionProvider
      error={serverError}
      isLoading={isPacksDataLoading}
      type="table"
    >
      <Table
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
    </CardsConditionProvider>
  )
}
