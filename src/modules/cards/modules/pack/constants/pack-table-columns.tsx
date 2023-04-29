import { StyledRate } from '../components/pack-table/styles'
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
