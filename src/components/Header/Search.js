import { Fragment } from "react";
import { searchMenu } from "../../const/search";
import { Link } from "react-router-dom";
import { hostUrl } from "../../const/urlConsts";
import Preview from "../Preview/Preview";

const Search = ({ seacrhInputFocusHandler, seacrhInputChangeHandler, isSearchInputEmpty, currentPage, items }) => {
  return (
    <Fragment>
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
              {isSearchInputEmpty
                ? searchMenu.map((item) => {
                    return (
                      <div
                        key={item.title}
                        className={`search-mode${currentPage === item["data-mode"] ? " active" : ""}`}
                        data-mode={item["data-mode"]}
                      >
                        {item.title}
                      </div>
                    );
                  })
                : items.map((item) => {
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
                            <Link
                              className="b-link"
                              to={item.url}
                            >
                              {item.name}
                              <span className="b-separator inline">/</span>
                              {item.russian}
                            </Link>
                          </div>
                          <div className="line">
                            <div className="key">Type:</div>
                            <div className="value">
                              <div className="b-tag">{item.kind}</div>
                            </div>
                          </div>
                          <div class="line">
                            <div class="key">Genres:</div>
                            <div class="value">
                              <div class="b-tag">
                                <span>Drama</span>
                              </div>
                              <div class="b-tag">
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
