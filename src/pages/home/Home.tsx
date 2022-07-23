import React from "react";
import { useForm } from "react-hook-form";
import { ThemeProvider } from "styled-components";
import { Logo } from "../../components/logo/Logo";
import usePost from "../../hooks/usePost";
import { GlobalStyle } from "../../styles/global";
import { theme } from "../../styles/theme";
import { validateSearch } from "../../utils/validate";
import {
  Layout,
  LogoContainer,
  Input,
  SubmitButton,
  SearchIcon,
  InputGroup,
  Spinner,
  ErrorMessage,
} from "./Home.styles";

type FormData = {
  keyword: string;
};

export function HomePage() {
  const { register, handleSubmit, formState } = useForm<FormData>();
  const [dispatchSearch, { loading }] = usePost("/crawl", {
    onCompleted: (data) => console.log(data),
    onError: (error) => console.log(error),
  });

  function onSubmit(formData: FormData) {
    dispatchSearch(formData);
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <form onSubmit={handleSubmit(onSubmit)}>
          <LogoContainer>
            <Logo />
            <InputGroup>
              <Input {...register("keyword", { validate: validateSearch })} />
              <SubmitButton
                type="submit"
                data-loading={loading ? "" : undefined}
                disabled={loading}
              >
                {loading ? <Spinner /> : <SearchIcon />}
              </SubmitButton>
              <ErrorMessage>{formState.errors.keyword?.message}</ErrorMessage>
            </InputGroup>
          </LogoContainer>
        </form>
      </Layout>
    </ThemeProvider>
  );
}
