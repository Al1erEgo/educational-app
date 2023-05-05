import React from 'react'

import { PacksTableDataColumnsType } from '../types'

export const packsTableColumns: PacksTableDataColumnsType[] = [
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
