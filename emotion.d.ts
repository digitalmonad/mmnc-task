import '@emotion/react'
import { lightTheme } from './styles/theme'

type CustomTheme = typeof lightTheme

/* eslint-disable @typescript-eslint/no-empty-interface */
declare module '@emotion/react' {
  export interface Theme extends CustomTheme {}
}
