import React, { useState } from 'react'

import { DeleteOutlined, EditOutlined, InfoCircleTwoTone } from '@ant-design/icons'
import { Space, Tooltip } from 'antd'
import { NavLink } from 'react-router-dom'

import { LoginResponseType } from '../../../../auth/api/types'
import { MY_BUTTON_NAME } from '../../../constants'
import { DeleteModal } from '../components/packs-modal/delete-packs-modal'
import { EditPacksModal } from '../components/packs-modal/edit-packs-modal'
import { packsTableColumns } from '../constants'
import {
  HandlerPacksFunctionType,
  PacksTableDataColumnsType,
  PackType,
  SetEditModalFunctionType,
} from '../types'

type GetPacksTableColumnsType = (
  activeButton: string,
  userData: LoginResponseType | undefined,
  handleEdit: HandlerPacksFunctionType,
  handleDelete: HandlerPacksFunctionType,
  handleOk: (setEditModal: SetEditModalFunctionType, id?: string, newName?: string) => void
) => PacksTableDataColumnsType[]

export const getPacksTableColumns: GetPacksTableColumnsType = (
  activeButton,
  userData,
  handleEdit,
  handleDelete,
  handleOk
) => {
  const [editModal, setEditModal] = useState<{ open: boolean; id?: string; name?: string }>({
    open: false,
  })

  console.log(editModal)

  const [deleteModal, setDeleteModal] = useState<{ open: boolean; id?: string }>({
    open: false,
  })

  /*  const handleOk = (id: string, newName?: string) => {
    if (id) {
      handleEdit({ cardsPack: { _id: id, name: newName } })
      setEditModal(prev => ({ ...prev, open: false, id: undefined, name: newName }))
    }
  }*/

  const handleDeleteOk = (id: string | undefined) => {
    if (id) {
      handleDelete({ id })
      setDeleteModal(prev => ({ ...prev, open: false, id: undefined }))
    }
  }

  return [
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: true,
      render: (text: string, pack: PackType) => (
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
      render: (text: string, pack: PackType) => {
        const hasCards = pack.cardsCount ? pack.cardsCount > 0 : false

        return activeButton === MY_BUTTON_NAME || pack?.user_id === userData?._id ? (
          <Space size="middle">
            <Tooltip title="Learn">
              {hasCards ? (
                <InfoCircleTwoTone onClick={() => console.log(pack)} />
              ) : (
                <InfoCircleTwoTone twoToneColor="lightgrey" />
              )}
            </Tooltip>

            <Tooltip title="Edit">
              <EditOutlined
                onClick={() => setEditModal({ open: true, id: pack._id, name: pack.name })}
              />
            </Tooltip>

            <EditPacksModal
              open={editModal.open}
              onCancel={() => setEditModal({ open: false, id: undefined, name: undefined })}
              onOk={(id, name) => handleOk(setEditModal, pack._id, name)}
              initialValue={pack.name}
              id={editModal.id}
            />

            <Tooltip title="Delete">
              <DeleteOutlined onClick={() => setDeleteModal({ open: true, id: pack._id })} />
            </Tooltip>

            <DeleteModal
              open={deleteModal.open}
              onCancel={() => setDeleteModal({ open: false, id: undefined })}
              onOk={() => handleDeleteOk(deleteModal.id)}
            />
          </Space>
        ) : (
          <Tooltip title="Learn">
            {hasCards ? (
              <InfoCircleTwoTone onClick={() => console.log(pack)} />
            ) : (
              <InfoCircleTwoTone twoToneColor="lightgrey" />
            )}
          </Tooltip>
        )
      },
    },
  ]
}
