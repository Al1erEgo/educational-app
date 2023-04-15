import React from 'react'

export type RouteType = {
  path?: string
  element?: React.ReactElement
  children?: readonly RouteType[]
}

export type RoutesType = {
  [routes: string]: readonly RouteType[]
}

export type UseGuestRoutesType = (
  routes: RoutesType,
  userRoute: string,
  guestRoute: string
) => React.ReactElement | null
