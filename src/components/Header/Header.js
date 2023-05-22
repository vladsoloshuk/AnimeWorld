import "./../../styles/app.scss";
import { Link } from "react-router-dom";
import { RoutesNames } from "../../router";
import { useState } from "react";
import Logo from "./Logo";
import Dropdown from "./Dropdown";

const Header = () => {
  const [isSubmenuOpened, setIsSubmenuOpened] = useState(false);

  const mainMenu = [
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
        <Dropdown
          isSubmenuOpened={isSubmenuOpened}
          mouseEnterMenuHandler={mouseEnterMenuHandler}
          mouseLeaveMenuHandler={mouseLeaveMenuHandler}
          dropdownParams={mainMenu}
        />
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
      <Link
        className="menu-icon contest"
        data-count="1"
        title="Tournament"
        href=""
      ></Link>
      <Link
        className="menu-icon sign_in"
        title="Enter"
      >
        Enter
      </Link>
      <div className="menu-dropdown profile">
        <span>
          <a
            className="submenu-triangle"
            href="/"
          >
            <img
              alt="SoVladai"
              src="https://desu.shikimori.me/system/users/x48/1227633.png?1673459024"
              srcSet="https://desu.shikimori.me/system/users/x80/1227633.png?1673459024 2x"
              title="SoVladai"
            />
            <span className="nickname">SoVladai</span>
          </a>
        </span>
        <div class="submenu">
          <div class="legend">Account</div>
          <a
            class="icon-profile"
            href="https://shikimori.me/SoVladai"
            tabindex="-1"
            title="Профиль"
          >
            <span class="text">Profile</span>
          </a>
          <a
            class="icon-anime_list"
            href="https://shikimori.me/SoVladai/list/anime"
            tabindex="-1"
            title="Anime list"
          >
            <span class="text">Anime list</span>
          </a>
          <a
            class="icon-manga_list"
            href="https://shikimori.me/SoVladai/list/manga"
            tabindex="-1"
            title="Manga List"
          >
            <span class="text">Manga List</span>
          </a>
          <a
            class="icon-mail"
            href="https://shikimori.me/SoVladai/dialogs"
            tabindex="-1"
            title="Mail"
          >
            <span class="text">Mail</span>
          </a>
          <a
            class="icon-achievements"
            href="https://shikimori.me/SoVladai/achievements"
            tabindex="-1"
            title="Achievements"
          >
            <span class="text">Achievements</span>
          </a>
          <a
            class="icon-clubs"
            href="https://shikimori.me/SoVladai/clubs"
            tabindex="-1"
            title="Clubs"
          >
            <span class="text">Clubs</span>
          </a>
          <a
            class="icon-settings"
            href="https://shikimori.me/SoVladai/edit/account"
            tabindex="-1"
            title="Settings"
          >
            <span class="text">Settings</span>
          </a>
          <div class="legend">Сайт</div>
          <a
            class="icon-site_rules"
            href="https://shikimori.me/forum/site/79042-pravila-sayta"
            tabindex="-1"
            title="Site ruled"
          >
            <span class="text">Site ruled</span>
          </a>
          <a
            class="icon-faq"
            href="https://shikimori.me/clubs/1093-faq-chasto-zadavaemye-voprosy"
            tabindex="-1"
            title="FAQ"
          >
            <span class="text">FAQ</span>
          </a>
          <a
            class="icon-sign_out"
            data-method="delete"
            href="https://shikimori.me/users/sign_out"
            tabindex="-1"
          >
            Exit
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
