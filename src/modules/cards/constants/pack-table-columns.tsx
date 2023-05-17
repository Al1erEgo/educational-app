import { PackTableContentCard } from '../components'
import { StyledRate } from '../styles'
import { PackTableColumnsType } from '../types'

export const packTableColumns: PackTableColumnsType[] = [
  {
    title: 'Question',
    dataIndex: 'question',
    render: (_, card) => <PackTableContentCard content={card.question} />,
  },
  {
    title: 'Answer',
    dataIndex: 'answer',
    render: (_, card) => <PackTableContentCard content={card.question} />,
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
