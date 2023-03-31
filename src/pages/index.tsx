import { Navigate, Route, Routes } from 'react-router-dom'

import { PATH } from '../constants'
import { Auth, Cards } from '../modules'

import { Error404 } from './error404'
import { MainPage } from './mainPage'

export const Pages = () => {
  const MAIN_PAGE = <Navigate to={`${PATH.Main}`} />

  return (
    <Routes>
      <Route path={`${PATH.Root}`} element={MAIN_PAGE} />
      <Route path={`${PATH.Main}`} element={<MainPage />} />
      <Route path={`${PATH.Auth}/*`} element={<Auth />} />
      <Route path={`${PATH.Cards}`} element={<Cards />} />
      <Route path={`${PATH.Other}`} element={<Error404 />} />
    </Routes>
  )
}
