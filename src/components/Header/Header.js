import "./../../styles/app.scss";
import { Link } from "react-router-dom";
import { Fragment, useState } from "react";
import Logo from "./Logo";
import Search from "./Search/Search";
import MainMenu from "./MainSubmenu";
import { useAppSelector } from "../../hooks/redux";
import ProfileMenu from "./ProfileSubmenu";

const Header = () => {
  const mainMenuVisibility = useAppSelector((state) => state.menuParams.mainSubmenu);
  const profileMenuVisibility = useAppSelector((state) => state.menuParams.profileSubmenu);
  const searchMenuVisibility = useAppSelector((state) => state.menuParams.search);
  const isMobile = useAppSelector((state) => state.menuParams.mobile);
  const [isLogged, setIsLogged] = useState(false);

  return (
    <header
      className={`l-top_menu${mainMenuVisibility | profileMenuVisibility ? " is-submenu" : ""}${searchMenuVisibility && (!mainMenuVisibility && !profileMenuVisibility) ? " is-search-focus is-search-shade" : ""}${
        isMobile ? " is-search-mobile" : ""
      }`}
    >
      <div className="menu-logo">
        <Logo />
        <MainMenu />
      </div>
      <Search />
      <Link
        className="menu-icon forum desktop"
        title="Forum"
      ></Link>
      <Link
        className="menu-icon sign_in"
        title="Enter"
        data-text="Enter"
      ></Link>
      {isLogged ? (
        <Fragment>
          <Link
            className="menu-icon contest"
            data-count="1"
            title="Contests"
          ></Link>
          <Link
            className="menu-icon mail"
            data-count="1"
            title="Mail"
          ></Link>
          <ProfileMenu />
        </Fragment>
      ) : (
        ""
      )}
    </header>
  );
};

export default Header;
