import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'

import { Header, Loader } from '@/components'
import { MAIN_PATH } from '@/constants'
import { AuthRoutes, CardsRoutes } from '@/modules'
import { useAuthMeQuery } from '@/modules/auth/api/auth-api'
import { AuthProvider } from '@/modules/auth/components'
import { Error404 } from '@/pages'
import { ModalProvider } from '@/providers'
import { GlobalStyle, ModuleContainer } from '@/styles'

export const App = () => {
  const { isFetching } = useAuthMeQuery('auth')

  return (
    <HashRouter>
      <GlobalStyle />
      <Header />
      <Loader isLoading={isFetching}>
        <ModalProvider>
          <ModuleContainer>
            <Routes>
              <Route path={MAIN_PATH.Root} element={<Navigate to={MAIN_PATH.Cards} />} />
              <Route path={`${MAIN_PATH.Auth}/*`} element={<AuthRoutes />} />
              <Route element={<AuthProvider />}>
                <Route path={`${MAIN_PATH.Cards}/*`} element={<CardsRoutes />} />
              </Route>
              <Route path={MAIN_PATH.Error} element={<Error404 />} />
            </Routes>
          </ModuleContainer>
        </ModalProvider>
      </Loader>
    </HashRouter>
  )
}
