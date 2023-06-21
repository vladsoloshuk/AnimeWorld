import { Fragment } from "react";
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";
import { useAppSelector } from "../../../hooks/redux";
import SearchMobile from "./SearchMobile";

const Search = () => {
  const searchVisibility = useAppSelector((state) => state.pageParams.search);

  return (
    <Fragment>
      <SearchMobile searchVisibility={searchVisibility} />
      <div className="global-search">
        <SearchInput searchVisibility={searchVisibility} />
        <SearchResults />
      </div>
    </Fragment>
  );
};

export default Search;
