import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Space, Tooltip } from 'antd'

import { packTableColumns } from '../constants'
import { HandlerFunctionType, PackTableColumnsType } from '../types'

type GetTableColumnsType = (
  isMine: boolean,
  deleteCard: HandlerFunctionType,
  updateCard: HandlerFunctionType
) => PackTableColumnsType[]

export const getTableColumns: GetTableColumnsType = (isMine, deleteCard, updateCard) => {
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
                onClick={() => updateCard({ card: { _id: card.key, question: '11' } })}
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
