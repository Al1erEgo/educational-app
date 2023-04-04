import { Navigate, Route, Routes } from 'react-router-dom'

import { MAIN_PATH } from '../constants'
import { Auth, Cards } from '../modules'

import { Error404 } from './error404'
import { MainPage } from './main-page'

export const Pages = () => {
  const AUTH_PAGE = <Navigate to={`${MAIN_PATH.Auth}`} />

  return (
    <Routes>
      <Route path={`${MAIN_PATH.Root}`} element={AUTH_PAGE} />
      <Route path={`${MAIN_PATH.Main}`} element={<MainPage />} />
      <Route path={`${MAIN_PATH.Auth}/*`} element={<Auth />} />
      <Route path={`${MAIN_PATH.Cards}`} element={<Cards />} />
      <Route path={`${MAIN_PATH.Error}`} element={<Error404 />} />
    </Routes>
  )
}
