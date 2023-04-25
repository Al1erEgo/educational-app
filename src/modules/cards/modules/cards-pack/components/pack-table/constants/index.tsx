import { Rate } from 'antd'

import { PackTableColumnsType } from '../types'

export const PackTableColumns: PackTableColumnsType[] = [
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
    width: '10%',
  },
  {
    title: 'Grade',
    dataIndex: 'grade',
    sorter: true,
    width: '17%',
    render: (_, card) => <Rate defaultValue={card.grade} />,
  },
]
