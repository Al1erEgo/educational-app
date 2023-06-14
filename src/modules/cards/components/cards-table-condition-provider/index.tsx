import React, { FC, PropsWithChildren } from 'react'

import { Skeleton } from 'antd'

import { ErrorMessage } from '@/components'
import { TableErrorType } from '@/modules/cards/types'

type CardsConditionProviderType = {
  error?: TableErrorType
  isLoading?: boolean
  type: 'card' | 'table'
}

export const CardsConditionProvider: FC<PropsWithChildren<CardsConditionProviderType>> = ({
  children,
  isLoading,
  error,
  type,
}) => {
  const skeletonRows = type === 'card' ? 5 : 10

  if (isLoading) {
    return <Skeleton paragraph={{ rows: skeletonRows }} active title={false} />
  }
  if (error) {
    return <ErrorMessage serverError={error} />
  }

  return <>{children}</>
}
