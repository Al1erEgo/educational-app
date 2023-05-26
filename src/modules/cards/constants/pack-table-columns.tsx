import { CardsTableContentCard } from '@/modules/cards/components'
import { StyledRate } from '@/modules/cards/styles'
import { PackTableColumnsType } from '@/modules/cards/types'

export const packTableColumns: PackTableColumnsType[] = [
  {
    title: 'Question',
    dataIndex: 'question',
    render: (_, card) => (
      <CardsTableContentCard
        textContent={card.question}
        imgContent={card.questionImg}
      />
    ),
  },
  {
    title: 'Answer',
    dataIndex: 'answer',
    render: (_, card) => (
      <CardsTableContentCard
        textContent={card.answer}
        imgContent={card.answerImg}
      />
    ),
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
