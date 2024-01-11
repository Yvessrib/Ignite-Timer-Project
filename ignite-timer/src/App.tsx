import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router.tsx'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default.ts'
import { CyclesContextProvider } from './contexts/CyclesContexts.tsx'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  )
}
