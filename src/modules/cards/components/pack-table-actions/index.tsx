import { FC } from 'react'

import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Space, Tooltip } from 'antd'

import { CardsModalsHandlersType, PackCardType } from '@/modules/cards/types'

type PackTableActionsType = {
  card: PackCardType
} & Partial<CardsModalsHandlersType>
export const PackTableActions: FC<PackTableActionsType> = ({
  card,
  deleteCardModal,
  updateCardModal,
}) => {
  const handleEditCard = () =>
    updateCardModal?.({
      card: {
        _id: card.key,
        question: card.question,
        answer: card.answer,
        questionImg: card.questionImg,
        answerImg: card.answerImg,
      },
    })

  const handleDeleteCard = () => deleteCardModal?.({ id: card.key })

  return (
    <Space size="middle">
      <Tooltip title="Edit">
        <EditOutlined onClick={handleEditCard} />
      </Tooltip>
      <Tooltip title="Delete">
        <DeleteOutlined onClick={handleDeleteCard} />
      </Tooltip>
    </Space>
  )
}
