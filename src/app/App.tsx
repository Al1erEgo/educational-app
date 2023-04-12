import { Route, Routes } from 'react-router-dom'

import { AuthProvider, Header, Loader } from '../components'
import { Error404 } from '../components/error404'
import { CARDS_ROUTES, MAIN_PATH } from '../constants'
import { useCardsRoutes, useDefaultPage } from '../hooks'
import { Auth, Cards } from '../modules'
import { useAuthMeQuery } from '../modules/auth/auth-api'
import { GlobalStyle } from '../styles'

export const App = () => {
  const { isLoading } = useAuthMeQuery('auth')
  const { defaultPage } = useDefaultPage(MAIN_PATH.Cards, MAIN_PATH.Auth)

  const routes = useCardsRoutes(CARDS_ROUTES, defaultPage)

  return (
    <>
      <GlobalStyle />
      <Header />
      <Loader isLoading={isLoading}>
        <Routes>
          <Route path={MAIN_PATH.Root} element={defaultPage} />
          <Route path={`${MAIN_PATH.Auth}/*`} element={<Auth />} />
          <Route element={<AuthProvider />}>
            <Route path={MAIN_PATH.Cards} element={<Cards />} />
          </Route>
          <Route path={MAIN_PATH.Error} element={<Error404 />} />
        </Routes>
      </Loader>
    </>
  )
}
