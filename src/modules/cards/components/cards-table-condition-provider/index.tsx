import React, { FC, PropsWithChildren } from 'react'

import { Skeleton } from 'antd'

import { ErrorServerHandler } from '../../../../components'
import { TableDataType } from '../../types'

type CardsTableConditionProviderType = Pick<TableDataType, 'serverError' | 'isPackDataLoading'>

export const CardsTableConditionProvider: FC<
  PropsWithChildren<CardsTableConditionProviderType>
> = ({ children, isPackDataLoading, serverError }) => {
  if (isPackDataLoading) {
    return <Skeleton paragraph={{ rows: 10 }} active />
  }
  if (serverError) {
    return <ErrorServerHandler error={serverError} />
  }

  return <>{children}</>
}
