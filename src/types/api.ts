export type PostSearchData = {
  id: string;
};

export type PostSearchPayload = {
  keyword: string;
};

export type GetSearch = {
  id: string;
  status: "active" | "done";
  url: string[];
};
