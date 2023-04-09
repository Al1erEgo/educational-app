import { Navigate, Route, Routes } from 'react-router-dom'

import { AuthProvider } from '../components'
import { MAIN_PATH } from '../constants'
import { Auth, Cards } from '../modules'
import { authApi } from '../modules/auth/auth-api'

import { Error404 } from './error404'

export const Pages = () => {
  const [, response] = authApi.useLazyAuthMeQuery()
  const authQueryResult = authApi.endpoints.authMe.useQueryState()

  console.log(authQueryResult)

  const DEFAULT_PAGE = response ? (
    <Navigate to={`${MAIN_PATH.Cards}`} />
  ) : (
    <Navigate to={`${MAIN_PATH.Auth}`} />
  )

  return (
    <Routes>
      <Route path={`${MAIN_PATH.Root}`} element={DEFAULT_PAGE} />
      <Route path={`${MAIN_PATH.Auth}/*`} element={<Auth />} />
      <Route element={<AuthProvider />}>
        <Route path={`${MAIN_PATH.Cards}`} element={<Cards />} />
      </Route>
      <Route path={`${MAIN_PATH.Error}`} element={<Error404 />} />
    </Routes>
  )
}
