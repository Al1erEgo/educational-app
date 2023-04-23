import { InfoCircleOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { Space, Tooltip } from 'antd'

import { useDeleteCardsPackMutation } from '../../../../../api'
import { MY_BUTTON_NAME } from '../../../../../constants'
import { PackType, TableDataType } from '../types'

type ActionsColumnType = {
  activeButton?: string
  userData?: any
  refetch?: any
}

export const ActionsColumn = ({
  activeButton,
  userData,
  refetch,
}: ActionsColumnType): TableDataType => {
  const [deleteCard] = useDeleteCardsPackMutation()

  const handleLearn = (record: PackType) => {
    console.log('record', record)
  }

  const handleEdit = (record: PackType) => {
    console.log('record', record)
  }

  const handleDelete = async (record: PackType) => {
    await deleteCard({ id: record._id })
    await refetch()
  }

  return {
    title: 'Actions',
    dataIndex: 'actions',
    render: (text: string, record: PackType) => {
      return activeButton === MY_BUTTON_NAME || record?.user_name === userData?.name ? (
        <Space size="middle">
          <Tooltip title="Learn">
            <InfoCircleOutlined onClick={() => handleLearn(record)} />
          </Tooltip>
          <Tooltip title="Edit">
            <EditOutlined onClick={() => handleEdit(record)} />
          </Tooltip>
          <Tooltip title="Delete">
            <DeleteOutlined onClick={() => handleDelete(record)} />
          </Tooltip>
        </Space>
      ) : (
        <Tooltip title="Learn">
          <InfoCircleOutlined onClick={() => handleLearn(record)} />
        </Tooltip>
      )
    },
    sorter: false,
  }
}
