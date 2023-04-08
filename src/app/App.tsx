import { Header, Loader } from '../components'
import { useAuthMeQuery } from '../modules/auth/auth-api'
import { Pages } from '../pages'
import { GlobalStyle } from '../styles'

export const App = () => {
  const { isLoading } = useAuthMeQuery()

  return (
    <Loader isLoading={isLoading}>
      <GlobalStyle />
      <Header />
      <Pages />
    </Loader>
  )
}
