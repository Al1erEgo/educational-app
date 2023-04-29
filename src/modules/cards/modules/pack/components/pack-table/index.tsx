import React, { FC } from 'react'

import { Table } from 'antd'

import { CardsTableConditionProvider } from '../../../../components'
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
    <CardsTableConditionProvider serverError={serverError} isPackDataLoading={isPackDataLoading}>
      <Table
        size={'small'}
        columns={tableColumns}
        dataSource={formattedTableData}
        onChange={handleTableChange}
        sortDirections={['ascend', 'descend', null]}
        pagination={{
          ...tableParams.pagination,
          pageSizeOptions: ['10', '20', '50'],
          showQuickJumper: true,
          showSizeChanger: true,
          total: responseData?.cardsTotalCount || 0,
        }}
        scroll={{ scrollToFirstRowOnChange: true, y: tableHeight }}
      />
    </CardsTableConditionProvider>
  )
}
