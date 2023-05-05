import React from 'react'

import { Navigate, Route, Routes, useResolvedPath } from 'react-router-dom'

import { Error404 } from '../../components'

import { CARD_PATH } from './constants'
import { Learn, Pack, Packs } from './modules'
import { ModalProvider } from './providers'

export const Cards = () => {
  const path = useResolvedPath('')

  return (
    <ModalProvider>
    <Routes>
      <Route
        path={CARD_PATH.Root}
        element={<Navigate to={`${path.pathname}${CARD_PATH.Packs}`} />}
      />
      <Route path={`${CARD_PATH.Learn}/:packId`} element={<Learn />} />
      <Route path={CARD_PATH.Packs} element={<Packs />} />
      <Route path={CARD_PATH.Pack} element={<Pack />} />
      <Route path={CARD_PATH.Error} element={<Error404 />} />
    </Routes>
    </ModalProvider>
  )
}
