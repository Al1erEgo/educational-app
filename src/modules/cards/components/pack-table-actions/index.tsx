import { FC } from 'react'

import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Space, Tooltip } from 'antd'

import { PackCardType, PackModalsHandlersType } from '../../types'

type PackTableActionsType = {
  card: PackCardType
} & Partial<PackModalsHandlersType>
export const PackTableActions: FC<PackTableActionsType> = ({
  card,
  deleteCardModal,
  updateCardModal,
}) => {
  return (
    <Space size="middle">
      <Tooltip title="Edit">
        <EditOutlined
          onClick={() =>
            updateCardModal?.({
              card: {
                _id: card.key,
                question: card.question,
                answer: card.answer,
                questionImg: card.questionImg,
                answerImg: card.answerImg,
              },
            })
          }
        />
      </Tooltip>
      <Tooltip title="Delete">
        <DeleteOutlined onClick={() => deleteCardModal?.({ id: card.key })} />
      </Tooltip>
    </Space>
  )
}
