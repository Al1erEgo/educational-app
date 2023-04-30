import React from 'react'

import { DeleteOutlined, EditOutlined, InfoCircleTwoTone } from '@ant-design/icons'
import { Space, Tooltip } from 'antd'
import { NavLink } from 'react-router-dom'

import { MY_BUTTON_NAME } from '../../../../../constants'
import { packsTableColumns } from '../constants'
import { PacksTableDataColumnsType, HandlerPacksFunctionType } from '../types'

type GetPacksTableColumnsType = (
  activeButton: string,
  userData: any,
  handleLearn: HandlerPacksFunctionType,
  handleEdit: HandlerPacksFunctionType,
  handleDelete: HandlerPacksFunctionType
) => PacksTableDataColumnsType[]

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
      render: (text: string, pack) => (
        <NavLink
          to={`/cards/packs/${pack._id}?name=${pack.name}&own=${pack?.user_id === userData?._id}`}
        >
          {text}
        </NavLink>
      ),
    },
    ...packsTableColumns,
    {
      title: 'Actions',
      dataIndex: 'actions',
      render: (text: string, pack) => {
        const hasCards = pack.cardsCount > 0

        return activeButton === MY_BUTTON_NAME || pack?.user_id === userData?._id ? (
          <Space size="middle">
            <Tooltip title="Learn">
              {hasCards ? (
                <InfoCircleTwoTone onClick={() => handleLearn(pack)} />
              ) : (
                <InfoCircleTwoTone twoToneColor="lightgrey" />
              )}
            </Tooltip>

            <Tooltip title="Edit">
              <EditOutlined onClick={() => handleEdit(pack)} />
            </Tooltip>

            <Tooltip title="Delete">
              <DeleteOutlined onClick={() => handleDelete(pack)} />
            </Tooltip>
          </Space>
        ) : (
          <Tooltip title="Learn">
            {hasCards ? (
              <InfoCircleTwoTone onClick={() => handleLearn(pack)} />
            ) : (
              <InfoCircleTwoTone twoToneColor="lightgrey" />
            )}
          </Tooltip>
        )
      },
    },
  ]
}
