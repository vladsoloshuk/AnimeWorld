import "./../../styles/app.scss";
import { Link } from "react-router-dom";
import { RoutesNames } from "../../router";
import { useState } from "react";
import Logo from "./Logo";
import Dropdown from "./Dropdown";
import Search from "./Search";
import { menuDropdown, profileDropdown } from "../../const/header";

const Header = ({ currentPage, headerParams }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [isSubmenuOpened, setIsSubmenuOpened] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isSearchInputEmpty, setIsSearchInputEmpty] = useState(true);
  const [searchResults, setSearchResults] = useState([]);

  const [searchParams, setSearchParams] = useState({
    page: 1,
    limit: 15
  });

  const seacrhInputChangeHandler = (event) => {
    const inputValue = event.target.value;
    inputValue === "" ? setIsSearchInputEmpty(true) : setIsSearchInputEmpty(false);
    console.log(event.target.value);
  };

  const seacrhInputFocusHandler = () => {
    setIsSearchActive(!isSearchActive);
    console.log(isSearchActive);
  };

  const mouseEnterMenuHandler = () => {
    setIsSubmenuOpened(true);
  };

  const mouseLeaveMenuHandler = () => {
    setIsSubmenuOpened(false);
  };

  return (
    <header className={`l-top_menu${isSubmenuOpened ? " is-submenu" : ""}${isSearchActive ? " is-search-focus is-search-shade" : ""}`}>
      <div className="menu-logo">
        <Logo />
        <div
          className={`menu-dropdown main${isSubmenuOpened ? " active" : ""}`}
          onMouseEnter={mouseEnterMenuHandler}
          onMouseLeave={mouseLeaveMenuHandler}
        >
          <span className="menu-icon trigger mobile"></span>
          <span className={`submenu-triangle icon-${headerParams.icon}`}>
            <span>{headerParams.title}</span>
          </span>

          <Dropdown
            isSubmenuOpened={isSubmenuOpened}
            mouseEnterMenuHandler={mouseEnterMenuHandler}
            mouseLeaveMenuHandler={mouseLeaveMenuHandler}
            dropdownParams={menuDropdown}
          />
        </div>
      </div>
      <Search
        seacrhInputFocusHandler={seacrhInputFocusHandler}
        seacrhInputChangeHandler={seacrhInputChangeHandler}
        isSearchInputEmpty={isSearchInputEmpty}
      />
      <Link
        className="menu-icon forum desktop"
        title="Forum"
      ></Link>
      {isLogged ? (
        <Link
          className="menu-icon contest"
          data-count="1"
          title="Contests"
        ></Link>
      ) : (
        ""
      )}
      {isLogged ? (
        <Link
          className="menu-icon mail"
          data-count="1"
          title="Mail"
        ></Link>
      ) : (
        ""
      )}
      <Link
        className="menu-icon sign_in"
        title="Enter"
        data-text="Enter"
      ></Link>
      {isLogged ? (
        <div className={`menu-dropdown profile${isSubmenuOpened ? " active" : ""}`}>
          <span>
            <Link className="submenu-triangle">
              <img
                alt="SoVladai"
                src="https://desu.shikimori.me/system/users/x48/1227633.png?1673459024"
                srcSet="https://desu.shikimori.me/system/users/x80/1227633.png?1673459024 2x"
                title="SoVladai"
              />
              <span className="nickname">SoVladai</span>
            </Link>
          </span>
          <Dropdown
            isSubmenuOpened={isSubmenuOpened}
            mouseEnterMenuHandler={mouseEnterMenuHandler}
            mouseLeaveMenuHandler={mouseLeaveMenuHandler}
            dropdownParams={profileDropdown}
          />
        </div>
      ) : (
        ""
      )}
    </header>
  );
};

export default Header;
