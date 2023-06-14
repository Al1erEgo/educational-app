import React, { PropsWithChildren } from 'react'

import { Spin } from 'antd'

import { StyledLoaderContainer } from './styles'

type LoaderProps = {
  isLoading: boolean
}

export const Loader: React.FC<PropsWithChildren<LoaderProps>> = ({ isLoading, children }) => {
  return isLoading ? (
    <StyledLoaderContainer>
      <Spin tip="Loading" size="large" />
    </StyledLoaderContainer>
  ) : (
    <>{children}</>
  )
}
