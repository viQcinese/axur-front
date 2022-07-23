import React from "react";
import { useForm } from "react-hook-form";
import { ThemeProvider } from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { SearchView } from "../../components/search-view/SearchView";
import { SearchList } from "../../components/search-list/SearchList";
import usePost from "../../hooks/usePost";
import { GlobalStyle } from "../../styles/global";
import { theme } from "../../styles/theme";
import { PostSearchData, PostSearchPayload } from "../../types/api";
import { SearchItem } from "../../types/searchItem";
import { addSearchItem, getSearchItems } from "../../utils/localStorage";
import { validateSearch } from "../../utils/validate";
import {
  SearchActionContainer,
  LogoContainer,
  Input,
  SubmitButton,
  SearchIcon,
  Form,
  Spinner,
  ErrorMessage,
  Layout,
  SearchViewContainer,
  CleanHistoryButton,
} from "./Home.styles";

export function HomePage() {
  const { register, handleSubmit, formState, getValues } =
    useForm<PostSearchPayload>();
  const [searches, setSearches] = React.useState<SearchItem[]>(getSearchItems);
  const [selectedSearch, setSelectedSearch] = React.useState<SearchItem>();

  const [dispatchSearch, { loading }] = usePost<
    PostSearchData,
    PostSearchPayload
  >("/crawl", {
    onCompleted: (data) => {
      const newSearchItem = { keyword: getValues("keyword"), id: data.id };
      setSearches((prev) => [newSearchItem, ...prev]);
      addSearchItem(newSearchItem);
      setSelectedSearch(newSearchItem);
    },
    onError: (error) => console.log(error),
  });

  function onSubmit(formData: PostSearchPayload) {
    const existingSearch = searches.find(
      (search) => search.keyword === formData.keyword
    );
    if (existingSearch) {
      setSelectedSearch(existingSearch);
    } else {
      dispatchSearch(formData);
    }
  }

  function cleanHistory() {
    setSearches([]);
  }

  const validationError = formState.errors.keyword?.message;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {searches.length > 0 ? (
        <CleanHistoryButton onClick={cleanHistory}>
          Clean History
        </CleanHistoryButton>
      ) : null}
      <Layout isSearchOpen={!!selectedSearch}>
        <SearchActionContainer>
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
            {validationError ? (
              <ErrorMessage>{formState.errors.keyword?.message}</ErrorMessage>
            ) : null}
          </Form>
          <SearchList
            searches={searches}
            selectedSearchId={selectedSearch?.id}
            selectSearch={setSelectedSearch}
          />
        </SearchActionContainer>
        <SearchViewContainer>
          {selectedSearch ? <SearchView search={selectedSearch} /> : null}
        </SearchViewContainer>
      </Layout>
    </ThemeProvider>
  );
}
