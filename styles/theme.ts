import { Theme as ThemeT } from 'theme-ui'

const palette = {
  gray: {
    100: '#f9f9f9',
    500: '#f0f0f0',
  },
  teal: {
    100: '#f0fffc',
    500: '#38b2ac',
  },
  purple: {
    100: '#f3f0ff',
  },
}

type CustomThemeColorsT = ThemeT['colors'] & {
  palette: typeof palette
}

const colors: CustomThemeColorsT = {
  black: '#000',
  white: '#fff',
  text: 'hsla(230, 20%, 0%, 60%)',
  background: '#fff',
  primary: '#609',
  secondary: 'hsl(290, 100%, 80%)',
  highlight: 'hsl(260, 20%, 40%)',
  muted: 'hsla(230, 20%, 0%, 20%)',
  palette,
  modes: {
    light: {
      primary: 'black',
    },
  },
}

const fonts: ThemeT['fonts'] = {
  body: 'inherit',
  heading: 'inherit',
  monospace: 'Menlo, monospace',
}

const space: ThemeT['space'] = [0, 4, 8, 16, 32, 64, 128, 256, 512]

const fontSizes: ThemeT['fontSizes'] = [12, 14, 16, 20, 24, 32, 48, 64, 72]

const fontWeights: ThemeT['fontWeights'] = {
  body: 400,
  heading: 700,
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
