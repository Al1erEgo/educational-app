import React from 'react'

import { Error404 } from '../components/error404'
import { Auth, Cards } from '../modules'

import { MAIN_PATH } from './path'

export const CARDS_ROUTES = {
  ROOT_ROUTE: [{ path: MAIN_PATH.Root }],
  MAIN_ROUTES: [
    { path: `${MAIN_PATH.Auth}/*`, element: <Auth /> },
    { path: MAIN_PATH.Error, element: <Error404 /> },
  ],
  PRIVATE_ROUTES: [{ path: MAIN_PATH.Cards, element: <Cards /> }],
  GUEST_ROUTES: [],
} as const
