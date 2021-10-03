import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --red: #F00;
    --blue: #1094FF;
    --green: #00FF63;
    --yellow: #FFD610;
    --purple: #9000D9;

    --text: #5A5773;
    --divider: #E6EAEE;

    --background: #F8F7FB;
    --shape: #FFFFFF;
  }

  * {
   margin: 0px;
   padding: 0;
   box-sizing: border-box;
  }

  
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, text-area, button {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
  }

  h1, h2,  h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  h1, h2,  h3, h4, h5, h6, strong, a, p {
    color: var(--text);
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

`