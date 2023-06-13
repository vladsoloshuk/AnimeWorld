import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { elementVisibility } from "../../store/reducers/PageParams";
import { menuDropdown } from "../../const/header";
import lowerCase from "lodash/lowerCase";
import Dropdown from "./Dropdown";
import { useState } from "react";

const MainMenu = () => {
  const dispatch = useAppDispatch();
  const title = useAppSelector((state) => state.pageParams.title);
  const menuVisibility = useAppSelector((state) => state.pageParams.mainMenu);

  const [isVisible, setIsVisible] = useState(menuVisibility);

  const onMouseEnterhandler = () => {
    setIsVisible(true);
    dispatch(elementVisibility(["mainMenu", true]));
  };
  const onMouseLeavehandler = () => {
    setIsVisible(false);
    dispatch(elementVisibility(["mainMenu", false]));
  };
  const onClickHandler = () => {
    setIsVisible(!isVisible);
    dispatch(elementVisibility(["mainMenu", !isVisible]));
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

export default MainMenu;
