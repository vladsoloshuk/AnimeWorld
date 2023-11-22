import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { elementVisibility } from "../../store/reducers/MenuParams";
import { menuDropdown } from "../../const/header";
import lowerCase from "lodash/lowerCase";
import Dropdown from "./Dropdown";
import { useState } from "react";

const MainSubmenu = () => {
  const dispatch = useAppDispatch();
  const title = useAppSelector((state) => state.pageParams.title);
  const menuVisibility = useAppSelector((state) => state.menuParams.mainSubmenu);

  const [isVisible, setIsVisible] = useState(menuVisibility);

  const onMouseEnterhandler = () => {
    setIsVisible(true);
    dispatch(elementVisibility(["mainSubmenu", true]));
    dispatch(elementVisibility(["search", false]));
    dispatch(elementVisibility(["mobile", false]));
  };
  const onMouseLeavehandler = () => {
    setIsVisible(false);
    dispatch(elementVisibility(["mainSubmenu", false]));
  };
  const onClickHandler = () => {
    setIsVisible(!isVisible);
    dispatch(elementVisibility(["mainSubmenu", !isVisible]));
  };

  return (
    <div
      className={`menu-dropdown main${menuVisibility ? " active" : ""}`}
      onMouseEnter={onMouseEnterhandler}
      onClick={onClickHandler}
      onMouseLeave={onMouseLeavehandler}
    >
      <span className="menu-icon trigger mobile"></span>
      <span className={`submenu-triangle icon-${lowerCase(title)}`}>
        <span>{title}</span>
      </span>

      <Dropdown dropdownParams={menuDropdown} />
    </div>
  );
};

export default MainSubmenu;
