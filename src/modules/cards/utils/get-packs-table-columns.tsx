import React from 'react'

import { NavLink } from 'react-router-dom'

import { LoginResponseType } from '@/modules/auth/types'
import {
  DeletedCardsPackRequestType,
  UpdateCardsPackRequestType,
} from '@/modules/cards/api'
import {
  packsTableRenderActions,
  PackTableContentCard,
} from '@/modules/cards/components'
import { packsTableColumns } from '@/modules/cards/constants'
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
export const getPacksTableColumns: GetPacksTableColumnsType = (
  activeButton,
  userData,
  deletePack,
  updatePack
) => {
  const renderActions = packsTableRenderActions({
    activeButton,
    userData,
    deletePack,
    updatePack,
  })

  return [
    {
      title: 'Cover',
      dataIndex: 'cover',
      render: (text: string, pack: PackType) => (
        <PackTableContentCard
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
      render: (text: string, pack: PackType) => renderActions(text, pack),
    },
  ]
}
