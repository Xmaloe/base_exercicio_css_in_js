import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background-color: #f5f5f5;
  }

  .container {
    max-width: 1024px;
    margin: 0 auto;
    padding: 16px;
  }
`

export default GlobalStyle
