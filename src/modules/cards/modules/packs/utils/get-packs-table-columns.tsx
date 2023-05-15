import React from 'react'

import { DeleteOutlined, EditOutlined, InfoCircleTwoTone } from '@ant-design/icons'
import { Space, Tooltip } from 'antd'
import { NavLink } from 'react-router-dom'

import { LoginResponseType } from '../../../../auth/types'
import { useModalContext } from '../../../../modal-provider/hooks'
import { MY_BUTTON_NAME } from '../../../constants'
import { PacksModal, DeleteModal } from '../components/packs-modals'
import { packsTableColumns } from '../constants'
import { HandleDeleteOkType, HandleOkType, PacksTableDataColumnsType, PackType } from '../types'

type GetPacksTableColumnsType = (
  activeButton: string,
  userData: LoginResponseType | undefined,
  handleOk: HandleOkType,
  handleDeleteOk: HandleDeleteOkType
) => PacksTableDataColumnsType[]

/**
 * A function that returns an array of table columns for the packs table.
 * @param {string} activeButton - The currently active button.
 * @param {object} userData - An object containing the data of the currently authorized user.
 * @param {Function} handleOk - A callback function to handle the OK button click.
 * @param {Function} handleDeleteOk - A callback function to handle the OK button click in the delete confirmation modal.
 * @returns {Array} - An array of table columns for the card packs table.
 */
export const getPacksTableColumns: GetPacksTableColumnsType = (
  activeButton,
  userData,
  handleOk,
  handleDeleteOk
) => {
  const { showModal } = useModalContext()

  return [
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: true,
      render: (text: string, pack: PackType) => (
        <NavLink
          to={`/cards/packs/${pack._id}?name=${pack.name}&own=${
            pack?.user_id === userData?._id
          }&isEmpty=${pack.cardsCount === 0}`}
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

        const learnAction = hasCards ? (
          <NavLink to={`/cards/learn/${pack._id}?name=${pack.name}`}>
            <InfoCircleTwoTone />
          </NavLink>
        ) : (
          <InfoCircleTwoTone twoToneColor="lightgrey" />
        )

        const learnTooltipTitle = hasCards ? 'Learn' : 'No cards to learn'

        const handleEditClick = () => {
          showModal({
            title: 'Edit Pack',
            content: (
              <PacksModal
                key={pack._id}
                editing
                onOk={handleOk}
                packName={pack.name}
                id={pack._id}
                isPrivate={pack.isPrivate}
              />
            ),
          })
        }

        const handleDeleteClick = () => {
          showModal({
            title: 'Delete Pack',
            content: <DeleteModal onOk={() => handleDeleteOk(pack._id)} packName={pack.name} />,
          })
        }

        return activeButton === MY_BUTTON_NAME || pack?.user_id === userData?._id ? (
          <Space size="middle">
            <Tooltip title={learnTooltipTitle}>{learnAction}</Tooltip>

            <Tooltip title="Edit">
              <EditOutlined onClick={handleEditClick} />
            </Tooltip>

            <Tooltip title="Delete">
              <DeleteOutlined onClick={handleDeleteClick} />
            </Tooltip>
          </Space>
        ) : (
          <Tooltip title={learnTooltipTitle}>{learnAction}</Tooltip>
        )
      },
    },
  ]
}
