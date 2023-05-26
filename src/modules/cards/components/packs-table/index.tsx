import React, { FC } from 'react'

import { Table } from 'antd'

import { CardsConditionProvider } from '@/modules/cards/components'
import { useTableResize } from '@/modules/cards/hooks'
import { PacksTableDataType } from '@/modules/cards/types'
import { getFormattedPacksTableData } from '@/modules/cards/utils'

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
    <CardsConditionProvider error={serverError} type="table">
      <Table
        loading={isPacksDataLoading}
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
