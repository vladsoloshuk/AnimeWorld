import "./../../styles/app.scss";
import { Link, redirect } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import Logo from "./Logo";
import Search from "./Search/Search";
import MainMenu from "./MainSubmenu";
import { useAppSelector } from "../../hooks/redux";
import ProfileMenu from "./ProfileSubmenu";
import { api } from "../../services/Api";
import { CookiesProvider, useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

import { auth, client } from "node-shikimori";

const Header = () => {
  const mainMenuVisibility = useAppSelector((state) => state.menuParams.mainSubmenu);
  const profileMenuVisibility = useAppSelector((state) => state.menuParams.profileSubmenu);
  const searchMenuVisibility = useAppSelector((state) => state.menuParams.search);
  const isMobile = useAppSelector((state) => state.menuParams.mobile);
  const [isLoggedin, setIsLoggedin] = useState(false);
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["user"]);

  useEffect(() => {
    const { getAccessToken } = auth({
      clientId: "gGRPr-2KxbgGYli_nwbTSgznv8L6-ryczdNg1inBuRU",
      clientSecret: "CeysAo_ymwhCUSga0ujLjMAK056T__SghrO9-NglUGs"
    });
    const accessTokenRegex = /code=([^&]+)/;
    const isMatch = window.location.href.match(accessTokenRegex);
    console.log(isMatch);

    if (isMatch) {
      const accessToken = isMatch[1];
      localStorage.setItem("access_token", JSON.stringify(accessToken));
      // Cookies.set("access_token", accessToken);
      setIsLoggedin(true);
    }
    navigate("/");
  }, [isLoggedin, navigate]);

  // const { data } = api.useGetElementQuery(
  //   "https://shikimori.one/oauth/authorize?client_id=gGRPr-2KxbgGYli_nwbTSgznv8L6-ryczdNg1inBuRU&redirect_uri=urn%3Aietf%3Awg%3Aoauth%3A2.0%3Aoob&response_type=code&scope="
  // );
  // console.log(data);
  // const { getAccessToken } = auth({
  //   clientId: "gGRPr-2KxbgGYli_nwbTSgznv8L6-ryczdNg1inBuRU",
  //   clientSecret: "CeysAo_ymwhCUSga0ujLjMAK056T__SghrO9-NglUGs"
  // });
  // const accessToken = await getAccessToken(
  //   "https://shikimori.one/oauth/authorize?client_id=gGRPr-2KxbgGYli_nwbTSgznv8L6-ryczdNg1inBuRU&redirect_uri=urn%3Aietf%3Awg%3Aoauth%3A2.0%3Aoob&response_type=code&scope="
  // );
  // console.log(accessToken);
  // const shikimori = client();
  // shikimori.setAccessToken(accessToken);

  // const currentUser = await shikimori.users.whoami();

  // console.log(currentUser);
  // redirect('./')

  return (
    <header
      className={`l-top_menu${mainMenuVisibility | profileMenuVisibility ? " is-submenu" : ""}${
        searchMenuVisibility && !mainMenuVisibility && !profileMenuVisibility ? " is-search-focus is-search-shade" : ""
      }${isMobile ? " is-search-mobile" : ""}`}
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
      {isLoggedin ? (
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
        <Link
          to={
            "https://shikimori.one/oauth/authorize?client_id=gGRPr-2KxbgGYli_nwbTSgznv8L6-ryczdNg1inBuRU&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&response_type=code&scope="
          }
          className="menu-icon sign_in"
          title="Enter"
          data-text="Enter"
        ></Link>
      )}
    </header>
  );
};

export default Header;
