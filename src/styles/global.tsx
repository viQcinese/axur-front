import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    margin: 0;
  }

  body, input, button {
    font-size: 1.6rem;
    color: ${(props) => props.theme.colors.black.main}
  }

  *, *::before, &::after {
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    transition: box-shadow 0.1s ease-in;
  }

  a {
    text-decoration: none;
    color: inherit;
    outline: none;
  }

  a:hover {
    color: ${(props) => props.theme.colors.orange.dark}
  }

  *:focus {
    box-shadow: 0px 0px 0px 3px rgba(66, 153, 225, 0.6);
  }
`;
