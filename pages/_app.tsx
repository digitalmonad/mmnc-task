import type { AppProps } from 'next/app'
import { ThemeProvider } from 'theme-ui'
import { QueryClient, QueryClientProvider, Hydrate } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { useState } from 'react'
import { lightTheme } from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  const [client] = useState(new QueryClient())

  return (
    <QueryClientProvider {...{ client }}>
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeProvider theme={lightTheme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Hydrate>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default MyApp
