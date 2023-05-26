import React from 'react'

import {
  DeleteOutlined,
  EditOutlined,
  InfoCircleTwoTone,
} from '@ant-design/icons'
import { Space, Tooltip } from 'antd'
import { NavLink } from 'react-router-dom'

import { LoginResponseType } from '@/modules/auth/types'
import {
  DeletedCardsPackRequestType,
  UpdateCardsPackRequestType,
} from '@/modules/cards/api'
import { CardsTableContentCard } from '@/modules/cards/components'
import { MY_BUTTON_NAME, packsTableColumns } from '@/modules/cards/constants'
import {
  CardsModalsHandlerType,
  PacksTableDataColumnsType,
  PackType,
} from '@/modules/cards/types'

type GetPacksTableColumnsType = (
  activeButton: string,
  userData: LoginResponseType | undefined,
  deletePack: CardsModalsHandlerType<
    DeletedCardsPackRequestType & { name?: string }
  >,
  updatePack: CardsModalsHandlerType<UpdateCardsPackRequestType>
) => PacksTableDataColumnsType[]

/**
 * A function that returns an array of table columns for the packs table.
 * @param {string} activeButton - The currently active button.
 * @param {object} userData - An object containing the data of the currently authorized user.
 *   modal.
 * @param deletePack
 * @param updatePack
 * @returns {Array} - An array of table columns for the card packs table.
 */
export const getPacksTableColumns: GetPacksTableColumnsType = (
  activeButton,
  userData,
  deletePack,
  updatePack
) => {
  return [
    {
      title: 'Cover',
      dataIndex: 'cover',
      render: (_, pack: PackType) => (
        <CardsTableContentCard
          textContent={'no cover'}
          imgContent={pack.deckCover}
        />
      ),
    },
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: true,
      render: (text: string, pack: PackType) => (
        <NavLink
          to={`/cards/pack/${pack?._id}?name=${pack?.name}&own=${
            pack?.user_id === userData?._id
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
      render: (text: string, pack: PackType) => {
        const hasCards = pack?.cardsCount ? pack.cardsCount > 0 : false

        const learnAction = hasCards ? (
          <NavLink to={`/cards/learn/${pack?._id}?name=${pack?.name}`}>
            <InfoCircleTwoTone />
          </NavLink>
        ) : (
          <InfoCircleTwoTone twoToneColor="lightgrey" />
        )

        const learnTooltipTitle = hasCards ? 'Learn' : 'No cards to learn'

        return activeButton === MY_BUTTON_NAME ||
          pack?.user_id === userData?._id ? (
          <Space size="middle">
            <Tooltip title={learnTooltipTitle}>{learnAction}</Tooltip>

            <Tooltip title="Edit">
              <EditOutlined
                onClick={() =>
                  updatePack({
                    cardsPack: {
                      _id: pack?._id,
                      name: pack?.name,
                      private: pack?.isPrivate,
                      deckCover: pack?.deckCover,
                    },
                  })
                }
              />
            </Tooltip>

            <Tooltip title="Delete">
              <DeleteOutlined
                onClick={() => deletePack({ id: pack?._id, name: pack?.name })}
              />
            </Tooltip>
          </Space>
        ) : (
          <Tooltip title={learnTooltipTitle}>{learnAction}</Tooltip>
        )
      },
    },
  ]
}
