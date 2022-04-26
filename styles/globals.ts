import styled from 'styled-components'

import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    html,
    body {
        padding:0;
        margin: 0;
        font-family: 'Epilogue', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    * {
    box-sizing: border-box;
    }
`

export const AppWrapper = styled.div.attrs(() => ({
  variant: 'styles.root',
}))`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`
