import React from 'react'

import { NavLink } from 'react-router-dom'

import { PackType, PacksTableDataType } from '../types'

export const packsTableColumns: PacksTableDataType[] = [
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    render: (text: string, record: PackType) => (
      <NavLink to={`/cards/packs/${record._id}?name=${record.name}&own=`}>{text}</NavLink>
    ),
  },
  {
    title: 'Cards',
    dataIndex: 'cardsCount',
    sorter: true,
  },
  {
    title: 'Last Updated',
    dataIndex: 'updated',
    sorter: true,
  },
  {
    title: 'Created By',
    dataIndex: 'user_name',
    sorter: true,
  },
]
