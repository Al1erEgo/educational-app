import React from 'react'

import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Space, Tooltip } from 'antd'

import { LoginResponseType } from '@/modules/auth/types'
import {
  DeletedCardsPackRequestType,
  UpdateCardsPackRequestType,
} from '@/modules/cards/api'
import { packsLearnAction } from '@/modules/cards/components'
import { MY_BUTTON_NAME } from '@/modules/cards/constants'
import { CardsModalsHandlerType, PackType } from '@/modules/cards/types'

type PacksTableRenderActionsType = {
  activeButton: string
  userData: LoginResponseType | undefined
  deletePack: CardsModalsHandlerType<
    DeletedCardsPackRequestType & { name?: string }
  >
  updatePack: CardsModalsHandlerType<UpdateCardsPackRequestType>
}

export const packsTableRenderActions =
  ({
    activeButton,
    userData,
    deletePack,
    updatePack,
  }: PacksTableRenderActionsType) =>
  (text: string, pack: PackType) => {
    const hasCards = pack?.cardsCount ? pack.cardsCount > 0 : false
    const learnTooltipTitle = (hasCards: boolean) =>
      hasCards ? 'Learn' : 'No cards to learn'

    const handleEdit = () =>
      updatePack({
        cardsPack: {
          _id: pack?._id,
          name: pack?.name,
          private: pack?.isPrivate,
          deckCover: pack?.deckCover,
        },
      })

    const handleDelete = () => deletePack({ id: pack?._id, name: pack?.name })

    return activeButton === MY_BUTTON_NAME ||
      pack?.user_id === userData?._id ? (
      <Space size="middle">
        <Tooltip title={learnTooltipTitle(hasCards)}>
          {packsLearnAction(hasCards, pack)}
        </Tooltip>

        <Tooltip title="Edit">
          <EditOutlined onClick={handleEdit} />
        </Tooltip>

        <Tooltip title="Delete">
          <DeleteOutlined onClick={handleDelete} />
        </Tooltip>
      </Space>
    ) : (
      <Tooltip title={learnTooltipTitle(hasCards)}>
        {packsLearnAction(hasCards, pack)}
      </Tooltip>
    )
  }
