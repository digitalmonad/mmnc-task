import { ThemeProvider } from 'theme-ui'
import { withThemes } from '@react-theming/storybook-addon'
import { addDecorator } from '@storybook/react'
import { theme } from '../styles/theme'
import { GlobalStyles, AppWrapper } from '../styles/globals'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const onThemeSwitch = (context) => {
  const { theme } = context

  //   const background =
  //     theme.name === 'Dark Theme'
  //       ? theme.colors.background
  //       : theme.colors.background
  const background = theme.colors.background

  const parameters = {
    backgrounds: {
      default: background,
    },
  }
  return {
    parameters,
  }
}

const themingDecorator = withThemes(ThemeProvider, [theme], {
  onThemeSwitch,
})
const globalStylesDecorator = (Story) => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <Story />
      </AppWrapper>
    </ThemeProvider>
  </>
)

addDecorator(globalStylesDecorator)
addDecorator(themingDecorator)
