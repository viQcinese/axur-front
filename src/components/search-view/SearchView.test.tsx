import { render, screen } from "../../utils/test-utils";
import { SearchView } from "./SearchView";

jest.mock("../../hooks/useGet.ts", () => () => mockedData);

let mockedData = {};

describe("<SearchItem /> test suite", () => {
  it("renders loading state", () => {
    mockedData = {
      data: undefined,
      loading: true,
    };

    render(<SearchView search={{ id: "id", keyword: "keyword" }} />);

    const searchView = screen.getByTestId("search-view-container");

    expect(searchView).toHaveAttribute("aria-busy", "true");
  });

  it("renders empty state", async () => {
    mockedData = {
      data: { urls: [] },
      loading: false,
    };

    render(<SearchView search={{ id: "id", keyword: "keyword" }} />);

    const emptyText = screen.getByText(
      /No results were found with this keyword/i
    );

    expect(emptyText).toBeInTheDocument();
  });

  it("renders data state", async () => {
    mockedData = {
      data: { urls: ["http://url1.com.br", "http://url2.com.br"] },
      loading: false,
    };

    render(<SearchView search={{ id: "id", keyword: "keyword" }} />);

    expect(screen.queryAllByRole("link")).toHaveLength(2);
  });

  it("renders data state with active status", async () => {
    mockedData = {
      data: {
        status: "active",
        urls: ["http://url1.com.br", "http://url2.com.br"],
      },
      loading: false,
    };

    render(<SearchView search={{ id: "id", keyword: "keyword" }} />);

    expect(screen.getByTestId("active-search")).toBeInTheDocument();
  });
});
