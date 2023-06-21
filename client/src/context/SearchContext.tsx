import { createContext, useContext } from "react";

interface ISearchContext {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
}

const SearchContext = createContext<ISearchContext>({
  searchTerm: "",
  setSearchTerm: () => {},
});

export const useSearchContext = () => useContext(SearchContext);

export default SearchContext;
