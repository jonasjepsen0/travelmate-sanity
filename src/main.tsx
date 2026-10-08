import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { App } from './App.tsx'
import { LanguageContextProvider } from './contexts/LanguageContext'
import { CountryContextProvider } from './hooks/useCountries'
import { CityContextProvider } from './hooks/useCities'
import { AttractionContextProvider } from './hooks/useAttractions'
import { GlobalStyle } from './styled/Global.styled'
import { theme } from './styled/Theme.styled'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <LanguageContextProvider>
          <CountryContextProvider>
            <CityContextProvider>
              <AttractionContextProvider>
                <GlobalStyle />
                <App />
              </AttractionContextProvider>
            </CityContextProvider>
          </CountryContextProvider>
        </LanguageContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
