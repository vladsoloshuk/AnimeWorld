import "./../../styles/app.scss";
import { Link } from "react-router-dom";
import { RoutesNames } from "../../router";
import { useState, useEffect } from "react";
import Logo from "./Logo";
import Dropdown from "./Dropdown";
import Search from "./Search";
import { menuDropdown, profileDropdown } from "../../const/header";
import useFetching from "../../hooks/useFetching";
import AnimeServices from "../../api/AnimeService";

const Header = ({ currentPage, headerParams }) => {
  const [isLogged, setIsLogged] = useState(false);

  const [isSearchMobile, setIsSearchMobile] = useState(false);
  const [isSubmenu, setIsSubmenu] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isSearchInputEmpty, setIsSearchInputEmpty] = useState(true);
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useState({
    page: 1,
    limit: 15,
    search: ""
  });

  const seacrhInputChangeHandler = (event) => {
    const inputValue = event.target.value;
    inputValue === "" ? setIsSearchInputEmpty(true) : setIsSearchInputEmpty(false);
    setSearchParams({ ...searchParams, search: inputValue });
    fetchElements(searchParams);
  };

  const seacrhInputFocusHandler = () => {
    setIsSearchActive(!isSearchActive);
    console.log(isSearchActive);
  };

  //open mobile search panel
  const showMobileSearch = () => {
    setIsSearchMobile(!isSearchMobile);
    setIsSearchActive(!isSearchActive);
  };

  //show main submenu
  const mouseEnterMainMenuHandler = () => {
    setIsSubmenu(true);
  };
  const mouseLeaveMainMenuHandler = () => {
    setIsSubmenu(false);
  };

  //fetching setup
  const [fetchElements, isElementLoading, elementFetchError] = useFetching(async (searchParams) => {
    const response = await AnimeServices.getAnimes({ ...searchParams });
    setSearchResults([...response.data]);
    console.log(response.data);
  });

  return (
    <header
      className={`l-top_menu${isSubmenu ? " is-submenu" : ""}${isSearchActive ? " is-search-focus is-search-shade" : ""}${
        isSearchMobile ? " is-search-mobile" : ""
      }`}
    >
      <div className="menu-logo">
        <Logo />
        <div
          className={`menu-dropdown main${isSubmenu ? " active" : ""}`}
          onMouseEnter={mouseEnterMainMenuHandler}
          onMouseLeave={mouseLeaveMainMenuHandler}
        >
          <span className="menu-icon trigger mobile"></span>
          <span className={`submenu-triangle icon-${headerParams.icon}`}>
            <span>{headerParams.title}</span>
          </span>

          <Dropdown
            dropdownParams={menuDropdown}
          />
        </div>
      </div>
      <div
        className="menu-icon search mobile"
        onClick={showMobileSearch}
      ></div>
      <Search
        seacrhInputFocusHandler={seacrhInputFocusHandler}
        seacrhInputChangeHandler={seacrhInputChangeHandler}
        isSearchInputEmpty={isSearchInputEmpty}
        currentPage={headerParams.icon}
        items={searchResults}
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
        <div className={`menu-dropdown profile${isSubmenu ? " active" : ""}`}>
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
            isSubmenuOpened={isSubmenu}
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
