import React, { FC } from 'react'

import { Table } from 'antd'

import { CardsResponseType } from '../../../../api'
import { useTableResize } from '../../../../hooks'

import { HandleTableChangeType, PackTableColumnsType, PackTableParamsType } from './types'
import { getFormattedTableData } from './utils'

export type PackTableType = {
  data: CardsResponseType | undefined
  tableColumns: PackTableColumnsType[]
  tableParams: PackTableParamsType
  isLoading: boolean
  onTableChange: HandleTableChangeType
}

export const PackTable: FC<PackTableType> = ({
  data,
  tableColumns,
  tableParams,
  isLoading,
  onTableChange,
}) => {
  const tableHeight = useTableResize()

  const formattedTableData = getFormattedTableData(data)

  return (
    <Table
      size={'small'}
      columns={tableColumns}
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
