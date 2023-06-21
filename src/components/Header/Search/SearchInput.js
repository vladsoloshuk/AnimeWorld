import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { updateSearchParams, updateSearchArray } from "../../../store/reducers/SearchSlice";
import { api } from "../../../services/Api";
import { elementVisibility } from "../../../store/reducers/PageParams";
import { useSelector } from "react-redux";
import _ from "lodash";
import { updateFilter } from "../../../store/reducers/FilterSlice";

const SearchInput = () => {
  const dispatch = useAppDispatch();
  const queryParams = useAppSelector((state) => state.search.searchParams);
  const url = useAppSelector((state) => state.search.searchUrl);
  const searchMenu = useSelector((state) => state.search.searchMenu);

  const [search, setSearch] = useState("");
  const [skip, setSkip] = useState(true);

  const { data, isSuccess } = api.useGetElementsQuery({ url, queryParams }, { skip });

  const showSearchHandler = () => {
    dispatch(elementVisibility(["search", true]));
  };

  const clearInputHandler = (event) => {
    event.stopPropagation();
    setSkip(true);
    setSearch("");
    // console.log(search);
    // console.log(event);
  };

  const seacrhInputChangeHandler = (event) => {
    const value = event.target.value;
    setSearch(value);
    if (value !== "") {
      if (_.find(searchMenu, { mode: "Current", active: true })) {
        dispatch(elementVisibility(["search", false]));
        dispatch(updateFilter(["search", value]));
      } else {
        setSkip(false);
        dispatch(updateSearchParams(value));
      }
    } else {
      if (_.find(searchMenu, { mode: "Current", active: true })) {
        dispatch(updateFilter(["search", ""]));
        dispatch(elementVisibility(["search", true]));
      } else {
        setSkip(false);
        dispatch(updateSearchParams(""));
      }
      dispatch(updateSearchArray([]));
      setSkip(true);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(updateSearchArray(data));
    }
  }, [isSuccess, dispatch, data]);

  return (
    <label className="field">
      <input
        className={search === "" ? "" : "has-value"}
        onChange={seacrhInputChangeHandler}
        onClick={showSearchHandler}
        placeholder="Search..."
        type="text"
        vlue={search}
      ></input>
      <span
        className="clear"
        tabIndex={-1}
        onClick={clearInputHandler}
      ></span>
      <span className="hotkey-marker"></span>
      <span className="search-marker"></span>
    </label>
  );
};

export default SearchInput;
