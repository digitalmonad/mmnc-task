import '@emotion/react'
import { theme } from '../styles/theme'

type CustomTheme = typeof theme

/* eslint-disable @typescript-eslint/no-empty-interface */
declare module '@emotion/react' {
  export interface Theme extends CustomTheme {}
}
