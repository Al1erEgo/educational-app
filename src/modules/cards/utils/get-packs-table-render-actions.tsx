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

export const getPacksTableRenderActions = ({
  activeButton,
  userData,
  deletePack,
  updatePack,
}: PacksTableRenderActionsType) => {
  const learnAction = (hasCards: boolean, pack: PackType) => {
    if (hasCards) {
      return (
        <NavLink to={`/cards/learn/${pack?._id}?name=${pack?.name}`}>
          <InfoCircleTwoTone />
        </NavLink>
      )
    } else {
      return <InfoCircleTwoTone twoToneColor="lightgrey" />
    }
  }

  const learnTooltipTitle = (hasCards: boolean) =>
    hasCards ? 'Learn' : 'No cards to learn'

  return (text: string, pack: PackType) => {
    const hasCards = pack?.cardsCount ? pack.cardsCount > 0 : false

    return activeButton === MY_BUTTON_NAME ||
      pack?.user_id === userData?._id ? (
      <Space size="middle">
        <Tooltip title={learnTooltipTitle(hasCards)}>
          {learnAction(hasCards, pack)}
        </Tooltip>

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
      <Tooltip title={learnTooltipTitle(hasCards)}>
        {learnAction(hasCards, pack)}
      </Tooltip>
    )
  }
}
