import type { AppProps } from 'next/app'
import { ThemeProvider } from 'theme-ui'
import { QueryClient, QueryClientProvider, Hydrate } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { useState } from 'react'
import { appWithTranslation } from 'next-i18next'
import { theme } from '../styles/theme'
import { GlobalStyles } from '../styles/globals'
import { Header } from '../components/_layout/Header'

function MyApp({ Component, pageProps }: AppProps) {
  const [client] = useState(new QueryClient())

  return (
    <QueryClientProvider {...{ client }}>
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeProvider {...{ theme }}>
          <GlobalStyles />
          <Header />
          <Component {...pageProps} />
        </ThemeProvider>
      </Hydrate>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default appWithTranslation(MyApp)
