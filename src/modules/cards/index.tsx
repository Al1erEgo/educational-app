import React from 'react'

import { Navigate, Route, Routes, useResolvedPath } from 'react-router-dom'

import { Error404 } from '../../components'
import { ModalProvider } from '../modal-provider'

import { CARD_PATH } from './constants'
import { Pack } from './modules/pack'
import { Packs } from './modules/packs'

export const Cards = () => {
  const path = useResolvedPath('')

  return (
    <ModalProvider>
      <Routes>
        <Route
          path={CARD_PATH.Root}
          element={<Navigate to={`${path.pathname}${CARD_PATH.Packs}`} />}
        />
        <Route path={CARD_PATH.Packs} element={<Packs />} />
        <Route path={CARD_PATH.Pack} element={<Pack />} />
        <Route path={CARD_PATH.Error} element={<Error404 />} />
      </Routes>
    </ModalProvider>
  )
}
