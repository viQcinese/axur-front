import { SearchItem } from "../types/searchItem";
import { LOCAL_STORAGE_KEY } from "./constants";

export function getSearchItems() {
  const rawItems = localStorage.getItem(LOCAL_STORAGE_KEY);
  const searchItems = (rawItems ? JSON.parse(rawItems) : []) as SearchItem[];
  return searchItems;
}

export function addSearchItem(item: SearchItem) {
  const searchItems = getSearchItems();
  searchItems.unshift(item);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(searchItems));
}
