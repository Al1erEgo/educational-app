import React from 'react'

import { Table } from 'antd'

import { CardsConditionProvider } from '@/modules/cards/components'
import { useTableResize } from '@/modules/cards/hooks'
import { PacksTableDataType, PackTableDataType } from '@/modules/cards/types'

type CardsTableProps<T> = {
  tableData: T
}

export const CardsTable = <T extends PackTableDataType | PacksTableDataType>({ tableData }: CardsTableProps<T>) => {
  const {
    formattedTableData,
    tableColumns,
    tableParams,
    elementsCount,
    handleTableChange,
    isDataLoading,
    serverError,
  } = tableData as PackTableDataType & PacksTableDataType //заглушка для antd таблицы, не воспринимает conditional type

  const tableHeight = useTableResize()

  return (
    <CardsConditionProvider error={serverError} type="table">
      <Table
        size={'small'}
        columns={tableColumns}
        dataSource={formattedTableData}
        loading={isDataLoading}
        onChange={handleTableChange}
        pagination={{
          ...tableParams.pagination,
          pageSizeOptions: ['10', '20', '50'],
          showQuickJumper: true,
          showSizeChanger: true,
          total: elementsCount,
        }}
        scroll={{ scrollToFirstRowOnChange: true, y: tableHeight }}
      />
    </CardsConditionProvider>
  )
}
