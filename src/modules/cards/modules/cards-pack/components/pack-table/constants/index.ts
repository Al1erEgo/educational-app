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
  },
  {
    title: 'Grade',
    dataIndex: 'grade',
    sorter: true,
  },
]
