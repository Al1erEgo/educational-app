import React, { FC, PropsWithChildren } from 'react'

import { Skeleton } from 'antd'

import { ErrorServerHandler } from '../../../../components'
import { TableErrorType } from '../../types'

type CardsConditionProviderType = {
  error?: TableErrorType
  isLoading?: boolean
  type: 'card' | 'table'
}

export const CardsConditionProvider: FC<
  PropsWithChildren<CardsConditionProviderType>
> = ({ children, isLoading, error, type }) => {
  const skeletonRows = type === 'card' ? 5 : 10

  if (isLoading) {
    return <Skeleton paragraph={{ rows: skeletonRows }} active title={false} />
  }
  if (error) {
    return <ErrorServerHandler error={error} />
  }

  return <>{children}</>
}
