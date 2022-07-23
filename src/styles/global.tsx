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
    color: ${(props) => props.theme.colors.black.main}
  }

  *, *::before, &::after {
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  a:hover {
    color: ${(props) => props.theme.colors.orange.dark}
  }
`;
