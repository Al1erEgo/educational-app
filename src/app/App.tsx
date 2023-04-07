import { Header } from '../components'
import { IsAuthLoader } from '../modules/auth/components'
import { Pages } from '../pages'
import { GlobalStyle } from '../styles'

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <IsAuthLoader>
        <Pages />
      </IsAuthLoader>
    </>
  )
}
