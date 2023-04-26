import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Space, Tooltip } from 'antd'

import { StyledRate } from '../styles'
import { PackTableColumnsType } from '../types'

export const packTableColumns: PackTableColumnsType[] = [
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
    width: '14%',
  },
  {
    title: 'Grade',
    dataIndex: 'grade',
    sorter: true,
    width: '18%',
    render: (_, card) => <StyledRate defaultValue={card.grade} />,
  },
]

export const minePackColumn: PackTableColumnsType = {
  title: 'Actions',
  dataIndex: 'actions',
  render: (_, card) => (
    <Space size="middle">
      <Tooltip title="Edit">
        <EditOutlined onClick={() => handleEdit(record)} />
      </Tooltip>
      <Tooltip title="Delete">
        <DeleteOutlined onClick={() => handleDelete(record)} />
      </Tooltip>
    </Space>
  ),
}
