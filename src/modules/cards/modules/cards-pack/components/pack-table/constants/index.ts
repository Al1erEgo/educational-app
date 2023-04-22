import { ColumnsType } from 'antd/es/table'

import { PackDataTableType } from '../types'

export const PackTableColumns: ColumnsType<PackDataTableType> = [
  {
    title: 'Question',
    dataIndex: 'question',
  },
  {
    title: 'Answer',
    dataIndex: 'answer',
  },
  {
    title: 'LastUpdated',
    dataIndex: 'updated',
    sorter: true,
  },
  {
    title: 'Grade',
    dataIndex: 'grade',
  },
]
