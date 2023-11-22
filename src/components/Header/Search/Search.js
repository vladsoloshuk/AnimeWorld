import { Fragment } from "react";
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";
import { useAppSelector } from "../../../hooks/redux";
import SearchMobile from "./SearchMobile";
import { useState } from "react";

const Search = () => {
  const searchVisibility = useAppSelector((state) => state.menuParams.search);
  const [search, setSearch] = useState("");

  return (
    <Fragment>
      <SearchMobile searchVisibility={searchVisibility} />
      <div className="global-search">
        <SearchInput
          searchVisibility={searchVisibility}
          search={search}
          setSearch={setSearch}
        />
        <SearchResults setSearch={setSearch} />
      </div>
    </Fragment>
  );
};

export default Search;
