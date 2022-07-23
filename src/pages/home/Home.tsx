import React from "react";
import { useForm } from "react-hook-form";
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

type FormData = {
  search: string;
};

export function HomePage() {
  const { register, handleSubmit } = useForm<FormData>();
  const loading = true;

  function onSubmit(formData: FormData) {
    console.log(formData);
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <form onSubmit={handleSubmit(onSubmit)}>
          <LogoContainer>
            <Logo />
            <InputGroup>
              <Input {...register("search")} />
              <SubmitButton
                type="submit"
                data-loading={loading ? "" : undefined}
                disabled={loading}
              >
                {loading ? <Spinner /> : <SearchIcon />}
              </SubmitButton>
            </InputGroup>
          </LogoContainer>
        </form>
      </Layout>
    </ThemeProvider>
  );
}
