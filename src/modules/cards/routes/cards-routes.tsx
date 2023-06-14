import React from 'react'

import { Navigate, Route, Routes, useResolvedPath } from 'react-router-dom'

import { CARD_PATH } from '../constants'
import { LearnPage, PackPage, PacksPage } from '../pages'

import { Error404Page } from '@/pages'

export const CardsRoutes = () => {
  const path = useResolvedPath('')

  return (
    <Routes>
      <Route path={CARD_PATH.Root} element={<Navigate to={`${path.pathname}${CARD_PATH.Packs}`} />} />
      <Route path={`${CARD_PATH.Learn}/:packId`} element={<LearnPage />} />
      <Route path={CARD_PATH.Packs} element={<PacksPage />} />
      <Route path={CARD_PATH.Pack} element={<PackPage />} />
      <Route path={CARD_PATH.Error} element={<Error404Page />} />
    </Routes>
  )
}
