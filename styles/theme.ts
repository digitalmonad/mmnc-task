import { Theme as ThemeT } from 'theme-ui'

import {
  palette,
  fonts,
  space,
  fontSizes,
  aliasColors,
  lightModeColors,
  radii,
} from './tokens'

type CustomThemeColorsT = ThemeT['colors'] & {
  palette: typeof palette
}

const colors: CustomThemeColorsT = {
  black: '#000',
  white: '#fff',
  palette,
  ...aliasColors,
  modes: {
    light: lightModeColors,
  },
}

const fontWeights: ThemeT['fontWeights'] = {
  body: 400,
  heading: 900,
  display: 800,
}

const lineHeights: ThemeT['lineHeights'] = {
  body: 1.5,
  heading: 1.25,
}

export const theme = {
  fonts,
  colors,
  space,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  text: {
    body: {
      variant: 'text.heading',
    },
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      color: `${colors.primary}`,
    },
    display: {
      variant: 'text.heading',
      fontSize: [5, 6],
      fontWeight: 'display',
      letterSpacing: '-0.03em',
      mb: 3,
    },
  },
  forms: {
    input: {
      border: `2px solid ${colors.muted}`,
      transition: 'all ease 0.2s',
      ':focus': {
        border: `2px solid ${colors.primary}`,
        outline: 'none',
      },
    },
    select: {
      border: `2px solid ${colors.muted}`,
      transition: 'all ease 0.2s',
      ':focus': {
        border: `2px solid ${colors.primary}`,
        outline: 'none',
      },
    },
    option: {
      color: `${colors.muted}`,
      backgroundColor: 'red',
    },
  },
  buttons: {
    primary: {
      fontSize: 2,
      fontWeight: 'bold',
      color: 'background',
      bg: 'primary',
      borderRadius: 'default',
      borderWidth: '1px',
    },
    outline: {
      variant: 'buttons.primary',
      color: 'primary',
      bg: 'transparent',
      boxShadow: 'inset 0 0 2px',
    },
    secondary: {
      variant: 'buttons.primary',
      color: 'background',
      bg: 'secondary',
    },
  },
  styles: {
    container: {
      maxWidth: 1140,
    },
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      color: 'text',
    },
    h1: {
      variant: 'text.display',
    },
    h2: {
      variant: 'text.heading',
      fontSize: 5,
    },
    h3: {
      variant: 'text.heading',
      fontSize: 4,
    },
    h4: {
      variant: 'text.heading',
      fontSize: 3,
    },
    h5: {
      variant: 'text.heading',
      fontSize: 2,
    },
    h6: {
      variant: 'text.heading',
      fontSize: 1,
    },
    a: {
      color: 'primary',
      '&:hover': {
        color: 'secondary',
      },
    },
    pre: {
      fontFamily: 'monospace',
      fontSize: 1,
      p: 3,
      color: 'text',
      bg: 'muted',
      overflow: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      color: 'secondary',
      fontSize: 1,
    },
    inlineCode: {
      fontFamily: 'monospace',
      color: 'secondary',
      bg: 'muted',
    },
    hr: {
      border: 0,
      borderBottom: '1px solid',
      borderColor: 'muted',
    },
    img: {
      maxWidth: '100%',
    },
  },
}
