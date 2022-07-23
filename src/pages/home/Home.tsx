import React from "react";
import { ThemeProvider } from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { GlobalStyle } from "../../styles/global";
import { theme } from "../../styles/theme";
import {
  Layout,
  LogoContainer,
  Input,
  SubmitButton,
  SearchIcon,
  InputGroup,
  Spinner,
} from "./Home.styles";

export function HomePage() {
  const loading = false;
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <LogoContainer>
          <Logo />
          <InputGroup>
            <Input />
            <SubmitButton loading={loading}>
              {loading ? <Spinner /> : <SearchIcon />}
            </SubmitButton>
          </InputGroup>
        </LogoContainer>
      </Layout>
    </ThemeProvider>
  );
}
