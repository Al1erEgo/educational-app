import React, { FC, useEffect, useState } from 'react'

import { Table } from 'antd'

import { PackTableColumns } from './constants'
import { PackTablePropsType, TableCardType } from './types'
import { getTableHeight } from './utils'

export const PackTable: FC<PackTablePropsType> = ({
  data,
  tableParams,
  isLoading,
  onTableChange,
}) => {
  const [tableHeight, setTableHeight] = useState(getTableHeight(window.innerHeight))
  const formattedData: TableCardType[] =
    data?.cards.map(card => ({
      key: card._id,
      question: card.question,
      answer: card.answer,
      updated: new Date(card.updated).toLocaleDateString('ru-RU'),
      grade: card.grade,
    })) || []

  useEffect(() => {
    window.addEventListener('resize', () => setTableHeight(getTableHeight(window.innerHeight)))

    return () => {
      window.removeEventListener('resize', () => setTableHeight(getTableHeight(window.innerHeight)))
    }
  }, [window.innerHeight])

  return (
    <Table
      size={'small'}
      columns={PackTableColumns}
      dataSource={formattedData}
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
