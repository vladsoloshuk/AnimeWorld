import "./../../styles/app.scss";
import { Link } from "react-router-dom";
import { RoutesNames } from "../../router";
import { Fragment, useEffect, useState } from "react";

const Dropdown = ({ mouseEnterMenuHandler, mouseLeaveMenuHandler, isSubmenuOpened, dropdownParams }) => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div
      className={`menu-dropdown main${isSubmenuOpened ? " active" : ""}`}
      onMouseEnter={mouseEnterMenuHandler}
      onMouseLeave={mouseLeaveMenuHandler}
    >
      {/* {isMobile ? (
        <span className="menu-icon trigger mobile"></span>
      ) : (
        <span className="submenu-triangle icon-home">
          <span>Home</span>
        </span>
      )} */}

      <span className="menu-icon trigger mobile"></span>
      <span className="submenu-triangle icon-home">
        <span>Home</span>
      </span>

      <div className={`submenu${isSubmenuOpened ? " active" : ""}`}>
        {dropdownParams.map((dropdownItem) => {
          return (
            <Fragment key={dropdownItem.title}>
              <div className="legend">{dropdownItem.title}</div>
              {dropdownItem.items.map((item) => {
                return (
                  <Link
                    key={item.title}
                    className={`icon-${item.icon}`}
                    href={item.link}
                  >
                    {item.title}
                  </Link>
                );
              })}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Dropdown;
