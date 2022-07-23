import React from "react";
import { useForm } from "react-hook-form";
import { ThemeProvider } from "styled-components";
import { Logo } from "../../components/logo/Logo";
import usePost from "../../hooks/usePost";
import { GlobalStyle } from "../../styles/global";
import { theme } from "../../styles/theme";
import { PostSearchData, PostSearchPayload } from "../../types/api";
import { SearchItem } from "../../types/searchItem";
import { addSearchItem, getSearchItems } from "../../utils/localStorage";
import { validateSearch } from "../../utils/validate";
import {
  Layout,
  LogoContainer,
  Input,
  SubmitButton,
  SearchIcon,
  Form,
  Spinner,
  ErrorMessage,
  SearchList,
} from "./Home.styles";

export function HomePage() {
  const { register, handleSubmit, formState, getValues } =
    useForm<PostSearchPayload>();

  const [searches, setSearches] = React.useState<SearchItem[]>(getSearchItems);

  const [dispatchSearch, { loading }] = usePost<
    PostSearchData,
    PostSearchPayload
  >("/crawl", {
    onCompleted: (data) => {
      const newSearchItem = { keyword: getValues("keyword"), id: data.id };
      setSearches((prev) => [...prev, newSearchItem]);
      addSearchItem(newSearchItem);
    },
    onError: (error) => console.log(error),
  });

  function onSubmit(formData: PostSearchPayload) {
    const previouslySearched = !!searches.find(
      (search) => search.keyword === formData.keyword
    );
    if (previouslySearched) {
      console.log("here");
    } else {
      dispatchSearch(formData);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register("keyword", { validate: validateSearch })}
            readOnly={loading}
          />
          <SubmitButton
            type="submit"
            data-loading={loading ? "" : undefined}
            disabled={loading}
          >
            {loading ? <Spinner /> : <SearchIcon />}
          </SubmitButton>
          <ErrorMessage>{formState.errors.keyword?.message}</ErrorMessage>
        </Form>
        <SearchList>
          {searches.map((search) => (
            <li key={search.id}>
              <a>{search.keyword}</a>
            </li>
          ))}
        </SearchList>
      </Layout>
    </ThemeProvider>
  );
}
