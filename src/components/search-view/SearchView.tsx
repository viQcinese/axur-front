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

type SearchDisplayProps = {
  search: SearchItem;
};

export default function SearchDisplay(props: SearchDisplayProps) {
  const { keyword, id } = props.search;

  const { data, loading } = useGet<GetSearch>(`/crawl/${id}`);

  return (
    <Container>
      <HeadContainer>
        <h2>{keyword}</h2>
        <span>
          {data?.status === "active" ? (
            <Spinner size="2rem" color="#888" />
          ) : null}
        </span>
      </HeadContainer>
      {loading ? (
        <LoadingContainer>
          <Spinner />
        </LoadingContainer>
      ) : data?.urls.length ? (
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
      ) : (
        <EmptyContainer>
          <EmptyIcon />
          <span>No results were found with this keyword</span>
        </EmptyContainer>
      )}
    </Container>
  );
}
