import React from 'react'

import { NavLink } from 'react-router-dom'

import { LoginResponseType } from '@/modules/auth/types'
import { CardsTableContentCard, PacksTableActions } from '@/modules/cards/components'
import { packsTableColumns } from '@/modules/cards/constants'
import {
  CardsModalsHandlerType,
  DeletedCardsPackRequestType,
  PacksTableDataColumnsType,
  PackType,
  UpdateCardsPackRequestType,
} from '@/modules/cards/types'

type GetPacksTableColumnsType = (
  activeButton: string,
  userData: LoginResponseType | undefined,
  deletePackModal: CardsModalsHandlerType<DeletedCardsPackRequestType & { name?: string }>,
  updatePackModal: CardsModalsHandlerType<UpdateCardsPackRequestType>
) => PacksTableDataColumnsType[]
export const getPacksTableColumns: GetPacksTableColumnsType = (
  activeButton,
  userData,
  deletePackModal,
  updatePackModal
) => {
  return [
    {
      title: 'Cover',
      dataIndex: 'cover',
      render: (_, pack: PackType) => <CardsTableContentCard textContent={'no cover'} imgContent={pack.deckCover} />,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: true,
      ellipsis: true,
      render: (text: string, pack: PackType) => (
        <NavLink to={`/cards/pack/${pack?._id}?name=${pack?.name}&own=${pack?.user_id === userData?._id}`}>
          {text}
        </NavLink>
      ),
    },
    ...packsTableColumns,
    {
      title: 'Actions',
      dataIndex: 'actions',
      render: (text: string, pack: PackType) => (
        <PacksTableActions
          pack={pack}
          activeButton={activeButton}
          userData={userData}
          deletePackModal={deletePackModal}
          updatePackModal={updatePackModal}
        />
      ),
    },
  ]
}
