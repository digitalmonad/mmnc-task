import { render, RenderOptions } from '@testing-library/react'
import React, { FC } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ThemeProvider } from 'theme-ui'
import { theme } from '../styles/theme'

const generateQueryClient = () => new QueryClient()

const AllTheProviders: FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  const queryClient = generateQueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider {...{ theme }}>{children}</ThemeProvider>
    </QueryClientProvider>
  )
}

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
