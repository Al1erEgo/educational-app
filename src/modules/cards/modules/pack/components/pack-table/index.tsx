import React, { FC } from 'react'

import { Table } from 'antd'

import { CardsConditionProvider } from '../../../../components'
import { useTableResize } from '../../../../hooks'
import { TableDataType } from '../../../../types'
import { getFormattedTableData } from '../../utils'

type PackTableType = {
  data: TableDataType
}

export const PackTable: FC<PackTableType> = ({ data }) => {
  const {
    responseData,
    tableColumns,
    tableParams,
    handleTableChange,
    isPackDataLoading,
    serverError,
  } = data
  const tableHeight = useTableResize()

  const formattedTableData = getFormattedTableData(responseData)

  return (
    <CardsConditionProvider error={serverError} type="table">
      <Table
        loading={isPackDataLoading}
        size={'small'}
        columns={tableColumns}
        dataSource={formattedTableData}
        onChange={handleTableChange}
        pagination={{
          ...tableParams.pagination,
          pageSizeOptions: ['10', '20', '50'],
          showQuickJumper: true,
          showSizeChanger: true,
          total: responseData?.cardsTotalCount || 0,
        }}
        scroll={{ scrollToFirstRowOnChange: true, y: tableHeight }}
      />
    </CardsConditionProvider>
  )
}
