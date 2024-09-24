import { ThemeProvider } from 'styled-components'
import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import GlobalStyle, { Container } from './styles'
import themeOrigin from './themes/origin'

function App() {
  return (
    <>
      <ThemeProvider theme={themeOrigin}>
        <GlobalStyle />
        <Header />
        <Hero />
        <Container>
          <main>
            <ListaVagas />
          </main>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App
