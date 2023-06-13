import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";
import { profileDropdown } from "../../const/header";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { elementVisibility } from "../../store/reducers/PageParams";
import { useState } from "react";

const ProfileMenu = () => {
  const dispatch = useAppDispatch();
  const menuVisibility = useAppSelector((state) => state.pageParams.profileMenu);

  const [isVisible, setIsVisible] = useState(menuVisibility);

  const onMouseEnterhandler = () => {
    setIsVisible(true);
    dispatch(elementVisibility(["profileMenu", true]));
  };
  const onMouseLeavehandler = () => {
    setIsVisible(false);
    dispatch(elementVisibility(["profileMenu", false]));
  };
  const onClickHandler = () => {
    setIsVisible(!isVisible);
    dispatch(elementVisibility(["profileMenu", !isVisible]));
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

export default ProfileMenu;
