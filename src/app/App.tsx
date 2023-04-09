import { Header, Loader } from '../components'
import { useAuthMeQuery } from '../modules/auth/auth-api'
import { Pages } from '../pages'
import { GlobalStyle } from '../styles'

export const App = () => {
  const { isLoading } = useAuthMeQuery('auth')

  return (
    <>
      <GlobalStyle />
      <Header />
      <Loader isLoading={isLoading}>
        <Pages />
      </Loader>
    </>
  )
}
