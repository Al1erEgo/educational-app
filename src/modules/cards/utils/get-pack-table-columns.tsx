import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Space, Tooltip } from 'antd'

import { DeleteCardRequestType } from '../api'
import { packTableColumns } from '../constants'
import { HandlerFunctionType, PackTableColumnsType } from '../types'
import { PackModalsOnSubmitType } from '../types/pack-modals'

type GetTableColumnsType = (
  isMine: boolean,
  deleteCard: PackModalsOnSubmitType<DeleteCardRequestType>,
  updateCard: HandlerFunctionType
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
