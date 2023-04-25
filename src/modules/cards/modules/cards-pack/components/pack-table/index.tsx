import React, { FC } from 'react'

import { Table } from 'antd'

import { useTableResize } from '../../../../hooks'

import { PackTableColumns } from './constants'
import { PackTablePropsType } from './types'
import { getFormattedTableData } from './utils'

export const PackTable: FC<PackTablePropsType> = ({
  data,
  tableParams,
  isLoading,
  onTableChange,
}) => {
  const tableHeight = useTableResize()

  const formattedTableData = getFormattedTableData(data)

  return (
    <Table
      size={'small'}
      columns={PackTableColumns}
      dataSource={formattedTableData}
      loading={isLoading}
      onChange={onTableChange}
      sortDirections={['ascend', 'descend', null]}
      pagination={{
        ...tableParams.pagination,
        pageSizeOptions: ['10', '20', '50'],
        showQuickJumper: true,
        showSizeChanger: true,
        total: data?.cardsTotalCount || 0,
      }}
      scroll={{ scrollToFirstRowOnChange: true, y: tableHeight }}
    />
  )
}
