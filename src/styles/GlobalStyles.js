import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'DMSerifDisplay';
    src: url('/assets/fonts/DMSerifDisplay-Regular.ttf') format('truetype');
    font-display: swap;
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'DMSans_18pt';
    src: url('/assets/fonts/DMSans_18pt-Regular.ttf') format('truetype');
    font-display: swap;
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'DMSans_18pt';
    src: url('/assets/fonts/DMSans_18pt-Italic.ttf') format('truetype');
    font-display: swap;
    font-weight: normal;
    font-style: italic; 
  }


  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'DMSans_18pt'; 
    font-weight: 400;
    font-size: 1.5rem;
  }

  section, li, p, a, button {
    font-family: 'DMSans_18pt'; 
    font-weight: 400;
    font-size: 1.5rem;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'DMSerifDisplay';
    font-weight: 700;
    font-size: 2rem;
  }
`;

export default GlobalStyles;
