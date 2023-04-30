import React from 'react'

import { DeleteOutlined, EditOutlined, InfoCircleTwoTone } from '@ant-design/icons'
import { Space, Tooltip } from 'antd'
import { NavLink } from 'react-router-dom'

import { MY_BUTTON_NAME } from '../../../../../constants'
import { packsTableColumns } from '../constants'
import { PackType, PacksTableDataType } from '../types'

type GetPacksTableColumnsType = (
  activeButton: string,
  userData: any,
  handleLearn: (record: PackType) => void,
  handleEdit: (record: PackType) => void,
  handleDelete: (record: PackType) => void
) => PacksTableDataType[]

export const getPacksTableColumns: GetPacksTableColumnsType = (
  activeButton,
  userData,
  handleLearn,
  handleEdit,
  handleDelete
) => {
  return [
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: true,
      render: (text: string, record: PackType) => (
        <NavLink
          to={`/cards/packs/${record._id}?name=${record.name}&own=${
            record?.user_id === userData?._id
          }`}
        >
          {text}
        </NavLink>
      ),
    },
    ...packsTableColumns,
    {
      title: 'Actions',
      dataIndex: 'actions',
      render: (text: string, record: PackType) => {
        const hasCards = record.cardsCount > 0

        return activeButton === MY_BUTTON_NAME || record?.user_id === userData?._id ? (
          <Space size="middle">
            <Tooltip title="Learn">
              {hasCards ? (
                <InfoCircleTwoTone onClick={() => handleLearn(record)} />
              ) : (
                <InfoCircleTwoTone twoToneColor="lightgrey" />
              )}
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
            {hasCards ? (
              <InfoCircleTwoTone onClick={() => handleLearn(record)} />
            ) : (
              <InfoCircleTwoTone twoToneColor="lightgrey" />
            )}
          </Tooltip>
        )
      },
    },
  ]
}
