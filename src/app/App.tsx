import { Loader, Header } from '../components'
import { APP_ROUTES, MAIN_PATH } from '../constants'
import { useCardsRoutes } from '../hooks'
import { useAuthMeQuery } from '../modules/auth/api'
import { GlobalStyle } from '../styles'

export const App = () => {
  const { isLoading } = useAuthMeQuery('auth')

  const routes = useCardsRoutes(APP_ROUTES, MAIN_PATH.Cards, MAIN_PATH.Auth)

  return (
    <>
      <GlobalStyle />
      <Header />
      <Loader isLoading={isLoading}>{routes}</Loader>
    </>
  )
}
