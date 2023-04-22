import React, { FC } from 'react'

import { Table } from 'antd'

import { PackTableColumns } from './constants'
import { PackTablePropsType } from './types'

export const PackTable: FC<PackTablePropsType> = ({ data }) => {
  return <Table size={'small'} columns={PackTableColumns} dataSource={data.cards} />
}
