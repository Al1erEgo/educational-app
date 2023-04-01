import { Navigate, Route, Routes } from 'react-router-dom'

import { MAIN_PATH } from '../constants'
import { Auth, Cards } from '../modules'

import { Error404 } from './error404'
import { MainPage } from './mainPage'

export const Pages = () => {
  const MAIN_PAGE = <Navigate to={`${MAIN_PATH.Main}`} />

  return (
    <Routes>
      <Route path={`${MAIN_PATH.Root}`} element={MAIN_PAGE} />
      <Route path={`${MAIN_PATH.Main}`} element={<MainPage />} />
      <Route path={`${MAIN_PATH.Auth}/*`} element={<Auth />} />
      <Route path={`${MAIN_PATH.Cards}`} element={<Cards />} />
      <Route path={`${MAIN_PATH.Other}`} element={<Error404 />} />
    </Routes>
  )
}
