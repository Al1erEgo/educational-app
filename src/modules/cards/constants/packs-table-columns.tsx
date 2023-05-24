import React from 'react'

import { PacksTableDataColumnsType } from '@/modules/cards/types'

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
