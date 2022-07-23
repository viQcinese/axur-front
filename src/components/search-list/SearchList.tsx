import * as React from "react";
import { SearchItem } from "../../types/searchItem";
import { Container } from "./SearchList.styles";

type SearchListProps = {
  searches: SearchItem[];
  selectedSearchId?: string;
  selectSearch: React.Dispatch<React.SetStateAction<SearchItem | undefined>>;
};

export function SearchList(props: SearchListProps) {
  const { searches, selectedSearchId, selectSearch } = props;
  return searches.length > 0 ? (
    <Container>
      {searches.map((search) => (
        <li
          key={search.id}
          onClick={() =>
            search.id === selectedSearchId
              ? selectSearch(undefined)
              : selectSearch(search)
          }
          data-id={search.id}
          aria-current={search.id === selectedSearchId ? "true" : undefined}
        >
          <button>{search.keyword}</button>
        </li>
      ))}
    </Container>
  ) : null;
}
