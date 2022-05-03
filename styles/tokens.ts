import { Theme as ThemeT } from 'theme-ui'

const baseSpaceUnit = 8

// Colors
export const palette = {
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

export const aliasColors = {
  text: 'hsla(230, 20%, 0%, 60%)',
  background: '#fff',
  primary: '#609',
  secondary: 'hsl(290, 100%, 80%)',
  highlight: 'hsl(260, 20%, 40%)',
  muted: 'hsla(230, 20%, 0%, 20%)',
}

export const lightModeColors = {
  primary: 'black',
}

// Font Families
export const fonts: ThemeT['fonts'] = {
  body: 'Poppins',
  heading: 'inherit',
  monospace: 'Menlo, monospace',
}

// Border Radius
export const radii: ThemeT['radii'] = [5, 10]

// Spacing
export const space = {
  none: 0,
  half: '0.5rem',
  base: '1rem',
  double: '2rem',
  triple: '3rem',
  quad: '4rem',
}

// Font Sizes
export const fontSizes: ThemeT['fontSizes'] = [
  '0.75rem',
  '1rem',
  '1.125rem',
  '1.5rem',
  '1.625rem',
  '2rem',
  '3rem',
  '4rem',
  '5rem',
]
