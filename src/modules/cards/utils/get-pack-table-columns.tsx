import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Space, Tooltip } from 'antd'

import { DeleteCardRequestType, UpdateCardRequestType } from '../api'
import { packTableColumns } from '../constants'
import { CardsModalsHandlerType, PackTableColumnsType } from '../types'

type GetTableColumnsType = (
  isMine: boolean,
  deleteCard: CardsModalsHandlerType<DeleteCardRequestType>,
  updateCard: CardsModalsHandlerType<UpdateCardRequestType>
) => PackTableColumnsType[]

export const getPackTableColumns: GetTableColumnsType = (
  isMine,
  deleteCard,
  updateCard
) => {
  if (isMine) {
    return [
      ...packTableColumns,
      {
        title: 'Actions',
        dataIndex: 'actions',
        width: '10%',
        render: (_, card) => (
          <Space size="middle">
            <Tooltip title="Edit">
              <EditOutlined
                onClick={() =>
                  updateCard({
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
              <DeleteOutlined onClick={() => deleteCard({ id: card.key })} />
            </Tooltip>
          </Space>
        ),
      },
    ]
  }

  return packTableColumns
}
