import userEvent from "@testing-library/user-event";
import { useState } from "react";
import { SearchItem } from "../../types/searchItem";
import { render, screen } from "../../utils/test-utils";
import { SearchList } from "./SearchList";

const searches = Array.from({ length: 10 }, (__, index) => ({
  keyword: `keyword-${index}`,
  id: `id-${index}`,
}));

function SearchListWithWrapper() {
  const [selectedSearch, setSelectedSearch] = useState<SearchItem>();

  return (
    <SearchList
      searches={searches}
      selectSearch={setSelectedSearch}
      selectedSearchId={selectedSearch?.id}
    />
  );
}

describe("<SearchList /> test suite", () => {
  it("renders search items", () => {
    render(<SearchListWithWrapper />);

    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.queryAllByRole("listitem")).toHaveLength(searches.length);
    searches.forEach((search) => {
      expect(
        screen.getByRole("button", { name: search.keyword })
      ).toBeInTheDocument();
    });
  });

  it("toggles search item", () => {
    const targetSearch = searches[2];
    render(<SearchListWithWrapper />);

    const targetSearchItem = screen.getByRole("button", {
      name: targetSearch.keyword,
    });

    expect(targetSearchItem).not.toHaveAttribute("aria-selected", "true");

    userEvent.click(targetSearchItem);

    expect(targetSearchItem).toHaveAttribute("aria-selected", "true");

    userEvent.click(targetSearchItem);

    expect(targetSearchItem).not.toHaveAttribute("aria-selected", "true");
  });
});
