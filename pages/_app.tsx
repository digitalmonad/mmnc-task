import type { AppProps } from 'next/app'
import { ThemeProvider } from 'theme-ui'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={{}}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
