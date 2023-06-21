import Button from "../../form_elements/Button";
import React, { useRef, FormEvent } from "react";
import { useSearchContext } from "../../../../context/SearchContext";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";

export const SearchFormHandler: React.FC<{}> = () => {
  const navigate = useNavigate();

  /**
   * get pathname, check if pathname is search then do not navigate else navigate to search route
   */
  const { pathname } = useLocation();
  const paramValue = pathname.replace("/", "");

  const { searchTerm, setSearchTerm } = useSearchContext();

  const searchRef = useRef<HTMLInputElement>(null);
  const handleSearchSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // when we are on search page just update the setSearchTerm
    if (paramValue != null && paramValue === "search") {
      setSearchTerm(searchRef.current?.value);
    } else {
      // update the setSearchTerm and navigate to the search page
      setSearchTerm(searchRef.current?.value);
      searchTerm && navigate("/search");
    }
  };

  // form should be submitted by pressing enter key from keyboard
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      // when we are on search page just update the setSearchTerm
      if (paramValue != null && paramValue === "search") {
        setSearchTerm(searchRef.current?.value);
      } else {
        // update the setSearchTerm and navigate to the search page
        setSearchTerm(searchRef.current?.value);
        searchTerm && navigate("/search");
      }
    }
  };

  return (
    <div className="nav-right-part nav-right-part-desktop">
      <div className="menu-search-inner">
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            ref={searchRef}
            required={true}
            onKeyDown={handleKeyDown}
            placeholder="Search For ..."
          />
          <Button type="submit" className="submit-btn">
            <i className="fa fa-search" />
          </Button>
        </form>
      </div>
    </div>
  );
};
