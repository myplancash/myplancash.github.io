import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Noto Sans Mono', monospace, sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Noto Sans Mono', monospace, sans-serif;
    font-weight: 700;
    font-size: 2rem;
  }

  code {
    font-family: 'Noto Sans Mono', monospace, sans-serif;
  }
`;

export default GlobalStyles;
