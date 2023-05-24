import "./../../styles/app.scss";
import { Link } from "react-router-dom";
import { RoutesNames } from "../../router";
import { useState } from "react";
import Logo from "./Logo";
import Dropdown from "./Dropdown";

const Header = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [isSubmenuOpened, setIsSubmenuOpened] = useState(false);

  const menuDropdown = [
    {
      title: "Database",
      items: [
        { icon: "anime", title: "Anime", link: "" },
        { icon: "manga", title: "Manga", link: "" },
        { icon: "ranobe", title: "Ranobe", link: "" }
      ]
    },
    {
      title: "Community",
      items: [
        { icon: "forum", title: "Forum", link: "" },
        { icon: "clubs", title: "Clubs", link: "" },
        { icon: "collections", title: "Collections", link: "" },
        { icon: "critiques", title: "Reviews", link: "" },
        { icon: "articles", title: "Articles", link: "" },
        { icon: "users", title: "Users", link: "" }
      ]
    },
    {
      title: "Other",
      items: [
        { icon: "contests", title: "Contests", link: "" },
        { icon: "calendar", title: "Calendar", link: "" }
      ]
    },
    {
      title: "Information",
      items: [
        { icon: "info", title: "About us", link: "" },
        { icon: "socials", title: "Social media", link: "" },
        { icon: "moderation", title: "Moderation", link: "" }
      ]
    }
  ];

  const profileDropdown = [
    {
      title: "Profile",
      items: [
        { icon: "anime_list", title: "Anime list", link: "" },
        { icon: "manga_list", title: "Manga list", link: "" },
        { icon: "mail", title: "Mail", link: "" },
        { icon: "achievements", title: "Achievements", link: "" },
        { icon: "clubs", title: "Clubs", link: "" },
        { icon: "settings", title: "Settings", link: "" }
      ]
    },
    {
      title: "Website",
      items: [
        { icon: "site_rules", title: "Site ruled", link: "" },
        { icon: "faq", title: "FAQ", link: "" },
        { icon: "sign_out", title: "Sign out", link: "" }
      ]
    }
  ];

  const mouseEnterMenuHandler = () => {
    setIsSubmenuOpened(true);
  };

  const mouseLeaveMenuHandler = () => {
    setIsSubmenuOpened(false);
  };

  return (
    <header className={`l-top_menu${isSubmenuOpened ? " is-submenu" : ""}`}>
      <div className="menu-logo">
        <Logo />
        <div
          className={`menu-dropdown main${isSubmenuOpened ? " active" : ""}`}
          onMouseEnter={mouseEnterMenuHandler}
          onMouseLeave={mouseLeaveMenuHandler}
        >
          <span className="menu-icon trigger mobile"></span>
          <span className="submenu-triangle icon-home">
            <span>Home</span>
          </span>

          <Dropdown
            isSubmenuOpened={isSubmenuOpened}
            mouseEnterMenuHandler={mouseEnterMenuHandler}
            mouseLeaveMenuHandler={mouseLeaveMenuHandler}
            dropdownParams={menuDropdown}
          />
        </div>
      </div>
      <div className="menu-icon search mobile"></div>
      <div className="global-search">
        <label className="field">
          <input
            placeholder="Search..."
            type="text"
          ></input>
          <span className="hotkey-marker"></span>
          <span className="search-marker"></span>
        </label>
        <div className="search-results">
          <div className="inner">
            <div>
              <div
                className="search-mode"
                data-mode="anime"
              >
                Anime
              </div>
              <div
                className="search-mode"
                data-mode="manga"
              >
                Manga
              </div>
              <div
                className="search-mode"
                data-mode="ranobe"
              >
                Ranobe
              </div>
              <div
                className="search-mode"
                data-mode="character"
              >
                Character
              </div>
              <div
                className="search-mode"
                data-mode="person"
              >
                Person
              </div>
            </div>
          </div>
        </div>
      </div>
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
      {isLogged ?
      <Link
        className="menu-icon mail"
        data-count="1"
        title="Mail"
      ></Link> : ""}
      <Link
        className="menu-icon sign_in"
        title="Enter"
        data-text="Enter"
      >
      </Link>
      { isLogged ?
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
      </div> : ""}
    </header>
  );
};

export default Header;
