import React from 'react'

import { Error404 } from '../components/error404'
import { RoutesType } from '../hooks/use-cards-routes/types'
import { Auth, Cards } from '../modules'

import { MAIN_PATH } from './paths'

/**
An object containing the routes used for the main parts of APP.
@typedef {Object} RoutesType
@property {Array} ROOT_ROUTE - An array containing a single object representing the root route of the Cards feature.
@property {Array} MAIN_ROUTES - An array containing objects representing the main routes to the parts of APP.
@property {Array} PRIVATE_ROUTES - An array containing objects representing the private routes, required authentication.
@property {Array} GUEST_ROUTES - An array of routes objects accessible only for unauthenticated users.
@type {RoutesType}
*/
export const APP_ROUTES: RoutesType = {
  ROOT_ROUTE: [{ path: MAIN_PATH.Root }],
  MAIN_ROUTES: [
    { path: `${MAIN_PATH.Auth}/*`, element: <Auth /> },
    { path: MAIN_PATH.Error, element: <Error404 /> },
  ],
  PRIVATE_ROUTES: [{ path: MAIN_PATH.Cards, element: <Cards /> }],
  GUEST_ROUTES: [],
} as const
