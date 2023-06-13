import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Preview from "../Preview/Preview";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { updateSearchParams } from "../../store/reducers/SearchSlice";
import { api } from "../../services/Api";
import { UrlParts } from "../../const/urlConsts";
import { defaultSearchMenu } from "../../const/search";
import { elementVisibility } from "../../store/reducers/PageParams";

const Search = () => {
  const dispatch = useAppDispatch();
  const queryParams = useAppSelector((state) => state.search.searchParams);
  // const title = useAppSelector((state) => state.pageParams.title);
  const [elements, setElements] = useState([]);
  const [search, setSearch] = useState("");

  const [isSearchActive, setIsSearchActive] = useState(false);

  const url = UrlParts.ANIMES;

  // const searchUrl = (title) => {
  //   let result;
  //   switch (title) {
  //     case "Home":
  //       result = UrlParts.ANIMES;
  //       break;
  //     case "Anime":
  //       result = UrlParts.ANIMES;
  //       break;
  //     case "Manga":
  //       result = UrlParts.MANGAS;
  //       break;
  //     case "Ranobe":
  //       result = UrlParts.RANOBE;
  //       break;
  //     default:
  //       result = UrlParts.ANIMES;
  //       break;
  //   }
  //   return result;
  // };

  // const searchMenu = dispatch(updateSearchMenu(title));

  // const changingSearchMenuArr = (defaultSearchMenu, title) => {
  //   let changedArray = [];
  //   title !== "home" ? (changedArray = defaultSearchMenu.slice()) : (changedArray = defaultSearchMenu.slice(1));
  //   changedArray[0]["active"] = "active";
  //   console.log(changedArray);
  //   return changedArray;
  // };

  const { data, isFetching, isSuccess } = api.useGetElementsQuery({ url, queryParams }, { skip: !isSearchActive });

  const seacrhInputChangeHandler = (event) => {
    dispatch(updateSearchParams(event.target.value));
    setSearch(event.target.value);
  };

  const clearInputHandler = (event) => {
    event.stopPropagation();
    setSearch("");
    console.log(search);
    console.log(event);
  };
  const showMobileSearchHandler = () => {
    setIsSearchActive(!isSearchActive);
    dispatch(elementVisibility(["searchMenu", !isSearchActive]));
    dispatch(elementVisibility(["mobile", !isSearchActive]));
  };
  const showSearchHandler = () => {
    setIsSearchActive(!isSearchActive);
    dispatch(elementVisibility(["searchMenu", !isSearchActive]));
  };

  // rerendering if page has been changed
  useEffect(() => {
    setElements(data);
  }, [data, queryParams, search]);

  return (
    <Fragment>
      <div
        className="menu-icon search mobile"
        onClick={showMobileSearchHandler}
      ></div>
      <div className="global-search">
        <label className="field">
          <input
            className={search === "" ? "" : "has-value"}
            onChange={seacrhInputChangeHandler}
            onBlur={showSearchHandler}
            onFocus={showSearchHandler}
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
        <div className="search-results">
          <div className="inner">
            <div>
              {search === ""
                ? defaultSearchMenu.map((item) => {
                    return (
                      <div
                        key={item.title}
                        className={`search-mode${item.active === "active" ? " active" : ""}`}
                        data-mode={item["data-mode"]}
                      >
                        {item.title}
                      </div>
                    );
                  })
                : elements.map((item) => {
                    return (
                      <Link
                        key={item.id}
                        id={item.id}
                        className="b-db_entry-variant-list_item"
                        to={item.url}
                        tabIndex="-1"
                      >
                        <div className="image">
                          <Preview element={item} />
                        </div>
                        <div className="info">
                          <div className="name">
                            <span
                              className="b-link"
                              to={item.url}
                            >
                              {item.name}
                              <span className="b-separator inline">/</span>
                              {item.russian}
                            </span>
                          </div>
                          <div className="line">
                            <div className="key">Type:</div>
                            <div className="value">
                              <div className="b-tag">{item.kind}</div>
                            </div>
                          </div>
                          <div className="line">
                            <div className="key">Genres:</div>
                            <div className="value">
                              <div className="b-tag">
                                <span>Drama</span>
                              </div>
                              <div className="b-tag">
                                <span>Shoujo</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Search;
