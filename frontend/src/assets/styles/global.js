import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --color-background: #FBFBFF;
    --color-primary-lighter: #ffd803;
    --color-primary-dark: #faae2b;
    --color-primary: #FFC100;
    --color-secondary: #37474F;
    --color-secondary-dark: #343837;
    --color-text-title: #32264D;
    --color-text-base: #37474F;
    --color-text-label: #9C98A6;
    --color-line-in-white: #E6E6F0;
    --color-input-background: #F8F8FC;
    --color-text-span: #FF5151;

    font-size: 60%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100vh;
  }

  body {
    background: var(--color-background);
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: center;  
  }

  body, 
  input, 
  button, 
  textarea {
    font: 400 1.6rem Roboto;
    color: var(--color-text-base);
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
`;
