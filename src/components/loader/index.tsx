import React, { PropsWithChildren } from 'react'

import { Spin } from 'antd'

import { StyledLoaderContainer } from './styles'

type LoaderPropsType = {
  isLoading: boolean
}

export const Loader: React.FC<PropsWithChildren<LoaderPropsType>> = ({ isLoading, children }) => {
  return isLoading ? (
    <StyledLoaderContainer>
      <Spin tip="Loading" size="large" />
    </StyledLoaderContainer>
  ) : (
    <>{children}</>
  )
}
