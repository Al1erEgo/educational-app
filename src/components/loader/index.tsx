import React, { PropsWithChildren } from 'react'

import { Spin } from 'antd'

import { LoaderContainer } from './styles'

type LoaderPropsType = {
  isLoading: boolean
}

export const Loader: React.FC<PropsWithChildren<LoaderPropsType>> = ({ isLoading, children }) => {
  return isLoading ? (
    <LoaderContainer>
      <Spin tip="Loading" size="large" />
    </LoaderContainer>
  ) : (
    <>{children}</>
  )
}
