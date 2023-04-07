import React, { PropsWithChildren } from 'react'

import { Spin } from 'antd'

import { useAuthMeQuery } from '../../auth-api'

export const IsAuthLoader: React.FC<PropsWithChildren> = ({ children }) => {
  const { isLoading } = useAuthMeQuery()

  console.log(isLoading)

  return isLoading ? <Spin tip="Loading" size="large" /> : <>{children}</>
}
