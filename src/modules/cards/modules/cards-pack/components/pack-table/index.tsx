import React, { FC } from 'react'

import { Table } from 'antd'

import { PackTableColumns } from './constants'
import { PackTableType, TableCardType } from './types'

export const PackTable: FC<PackTableType> = ({ data, tableParams, isLoading, onTableChange }) => {
  const formattedData: TableCardType[] =
    data?.cards.map(card => ({
      key: card._id,
      question: card.question,
      answer: card.answer,
      updated: new Date(card.updated).toLocaleDateString('ru-RU'),
      grade: card.grade,
    })) || []

  return (
    <Table
      size={'small'}
      columns={PackTableColumns}
      dataSource={formattedData}
      loading={isLoading}
      onChange={onTableChange}
      pagination={{
        ...tableParams.pagination,
        pageSizeOptions: ['10', '20', '50'],
        showQuickJumper: true,
        showSizeChanger: true,
        total: data?.cardsTotalCount || 1,
      }}
    />
  )
}
