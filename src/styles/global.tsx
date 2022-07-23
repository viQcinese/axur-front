import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    margin: 0;
  }

  body, input {
    font-size: 1.6rem;
  }

  *, *::before, &::after {
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }
`;
