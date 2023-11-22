import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";
import { profileDropdown } from "../../const/header";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { elementVisibility } from "../../store/reducers/MenuParams";
import { useState } from "react";

const ProfileSubmenu = () => {
  const dispatch = useAppDispatch();
  const menuVisibility = useAppSelector((state) => state.menuParams.profileSubmenu);

  const [isVisible, setIsVisible] = useState(menuVisibility);

  const onMouseEnterhandler = () => {
    setIsVisible(true);
    dispatch(elementVisibility(["profileSubmenu", true]));
    dispatch(elementVisibility(["search", false]));
    dispatch(elementVisibility(["mobile", false]));
  };
  const onMouseLeavehandler = () => {
    setIsVisible(false);
    dispatch(elementVisibility(["profileSubmenu", false]));
  };
  const onClickHandler = () => {
    setIsVisible(!isVisible);
    dispatch(elementVisibility(["profileSubmenu", !isVisible]));
  };

  return (
    <div
      className={`menu-dropdown profile${menuVisibility ? " active" : ""}`}
      onMouseEnter={onMouseEnterhandler}
      onClick={onClickHandler}
      onMouseLeave={onMouseLeavehandler}
    >
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
      <Dropdown dropdownParams={profileDropdown} />
    </div>
  );
};

export default ProfileSubmenu;
