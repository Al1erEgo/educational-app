import React, { PropsWithChildren } from 'react'

import { Spin } from 'antd'

import { LoaderContainer } from './styles'

type Props = {
  isLoading: boolean
}

export const Loader: React.FC<PropsWithChildren<Props>> = ({ isLoading, children }) => {
  return isLoading ? (
    <LoaderContainer>
      <Spin tip="Loading" size="large" />
    </LoaderContainer>
  ) : (
    <>{children}</>
  )
}
