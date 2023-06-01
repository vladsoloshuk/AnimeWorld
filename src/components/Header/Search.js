import { Fragment } from "react";
import { searchMenu } from "../../const/search";

const Search = ({ seacrhInputFocusHandler, seacrhInputChangeHandler, isSearchInputEmpty, currentPage }) => {
  return (
    <Fragment>
      <div className="menu-icon search mobile"></div>
      <div className="global-search">
        <label className="field">
          <input
            className={isSearchInputEmpty ? "" : "has-value"}
            onChange={seacrhInputChangeHandler}
            onFocus={seacrhInputFocusHandler}
            placeholder="Search..."
            type="text"
          ></input>
          <span
            className="clear"
            tabIndex={-1}
          ></span>
          <span className="hotkey-marker"></span>
          <span className="search-marker"></span>
        </label>
        <div className="search-results">
          <div className="inner">
            <div>
              {searchMenu.map((item) => {
                return (
                  <div
                    key={item.title}
                    className={`search-mode${currentPage === item["data-mode"] ? " active" : ""}`}
                    data-mode={item["data-mode"]}
                  >
                    {item.title}
                  </div>
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
