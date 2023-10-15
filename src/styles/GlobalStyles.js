import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Cinzel Bold';
    src: url('/assets/fonts/cinzel-bold-webfont.woff2') format('woff2');
    font-display: swap; /* Use 'swap' to display fallback font and swap to web font */
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Raleway Regular';
    src: url('/assets/fonts/raleway-regular-webfont.woff2') format('woff2');
    font-display: swap; /* Use 'swap' to display fallback font and swap to web font */
    font-weight: normal;
    font-style: normal;
  }


  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Raleway Regular'; 
    font-weight: 400;
    font-size: 1.5rem;
  }

  section, li, p, a, button {
    font-family: 'Raleway Regular'; 
    font-weight: 400;
    font-size: 1.5rem;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Cinzel Bold';
    font-weight: 700;
    font-size: 2rem;
  }
`;

export default GlobalStyles;
