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
        <li key={search.id}>
          <button
            onClick={() =>
              search.id === selectedSearchId
                ? selectSearch(undefined)
                : selectSearch(search)
            }
            aria-selected={search.id === selectedSearchId ? "true" : undefined}
          >
            {search.keyword}
          </button>
        </li>
      ))}
    </Container>
  ) : null;
}
