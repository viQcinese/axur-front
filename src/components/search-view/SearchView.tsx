import * as React from "react";
import useGet from "../../hooks/useGet";
import { GetSearch } from "../../types/api";
import { SearchItem } from "../../types/searchItem";
import { CRAWLER_URL } from "../../utils/constants";
import {
  Container,
  EmptyContainer,
  EmptyIcon,
  HeadContainer,
  LoadingContainer,
  Spinner,
  DataContainer,
} from "./SearchView.styles";

type SearchViewProps = {
  search: SearchItem;
};

export function SearchView(props: SearchViewProps) {
  const { keyword, id } = props.search;

  const { data, loading } = useGet<GetSearch>(`/crawl/${id}`);
  const isEmpty = data?.urls.length === 0;
  const hasData = !!data && data.urls.length > 0;

  return (
    <Container data-testid="search-view-container" aria-busy={loading}>
      <HeadContainer>
        <h2>{keyword}</h2>
        {data?.status === "active" ? (
          <Spinner size="2rem" color="#888" data-testid="active-search" />
        ) : null}
      </HeadContainer>
      {loading ? (
        <LoadingContainer>
          <Spinner />
        </LoadingContainer>
      ) : hasData ? (
        <DataContainer>
          <ul>
            {data.urls.map((url) => (
              <li key={url}>
                <a href={url} target="_blank">
                  {url.replace(CRAWLER_URL, "")}
                </a>
              </li>
            ))}
          </ul>
        </DataContainer>
      ) : isEmpty ? (
        <EmptyContainer>
          <EmptyIcon />
          <span>No results were found with this keyword</span>
        </EmptyContainer>
      ) : null}
    </Container>
  );
}
