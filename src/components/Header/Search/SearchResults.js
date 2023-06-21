import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { updateSearchMenu, changeSearchMode } from "../../../store/reducers/SearchSlice";
import SearchItem from "./SearchItem";

const SearchResults = ({ elements }) => {
  const dispatch = useAppDispatch();
  const title = useAppSelector((state) => state.pageParams.title);
  const searchMenu = useAppSelector((state) => state.search.searchMenu);
  const searchElements = useAppSelector((state) => state.search.searchElements);

  const searchMenuHandler = (event) => {
    event.stopPropagation()
    dispatch(changeSearchMode(event.target.getAttribute("data-mode")));
  };

  useEffect(() => {
    dispatch(updateSearchMenu(title));
  }, [title, dispatch]);

  return (
    <div className="search-results">
      <div className="inner">
        <div>
          {searchElements.length < 1
            ? searchMenu.map((item) => {
                return (
                  <div
                    key={item.title}
                    className={`search-mode${item.active ? " active" : ""}`}
                    data-mode={item.mode}
                    onClick={searchMenuHandler}
                  >
                    {item.title}
                  </div>
                );
              })
            : searchElements.map((item) => {
                return (
                  <SearchItem
                    key={item.id}
                    element={item}
                  />
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
