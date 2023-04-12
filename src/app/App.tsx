import { Header, Loader } from '../components'
import { CARDS_ROUTES, MAIN_PATH } from '../constants'
import { useCardsRoutes, useDefaultPage } from '../hooks'
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
      <Loader isLoading={isLoading}>{routes}</Loader>
    </>
  )
}
