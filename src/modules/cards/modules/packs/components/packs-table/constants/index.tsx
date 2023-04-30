import React from 'react'

import { PacksTableDataType } from '../types'

export const packsTableColumns: PacksTableDataType[] = [
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
