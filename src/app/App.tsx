import { Route, Routes } from 'react-router-dom'

import { Loader, Header, AuthProvider, Error404 } from '../components'
import { MAIN_PATH } from '../constants'
import { useDefaultPage } from '../hooks/use-main-page'
import { Auth, Cards } from '../modules'
import { useAuthMeQuery } from '../modules/auth/api'
import { GlobalStyle } from '../styles'

export const App = () => {
  const { isLoading } = useAuthMeQuery('auth')
  const { defaultPage } = useDefaultPage(MAIN_PATH.Cards, MAIN_PATH.Auth)

  console.log('app rendered')

  return (
    <>
      <GlobalStyle />
      <Header />
      <Loader isLoading={isLoading}>
        <Routes>
          <Route path={`${MAIN_PATH.Root}`} element={defaultPage} />
          <Route path={`${MAIN_PATH.Auth}/*`} element={<Auth />} />
          <Route element={<AuthProvider />}>
            <Route path={`${MAIN_PATH.Cards}`} element={<Cards />} />
          </Route>
          <Route path={`${MAIN_PATH.Error}`} element={<Error404 />} />
        </Routes>
      </Loader>
    </>
  )
}
