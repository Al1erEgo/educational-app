import React from 'react'

import { Navigate, Route, Routes, useResolvedPath } from 'react-router-dom'

import { CARD_PATH } from './constants'
import { Learn, Pack, Packs } from './pages'

import { Error404 } from '@/components'

export const Cards = () => {
  const path = useResolvedPath('')

  return (
    <Routes>
      <Route path={CARD_PATH.Root} element={<Navigate to={`${path.pathname}${CARD_PATH.Packs}`} />} />
      <Route path={`${CARD_PATH.Learn}/:packId`} element={<Learn />} />
      <Route path={CARD_PATH.Packs} element={<Packs />} />
      <Route path={CARD_PATH.Pack} element={<Pack />} />
      <Route path={CARD_PATH.Error} element={<Error404 />} />
    </Routes>
  )
}
