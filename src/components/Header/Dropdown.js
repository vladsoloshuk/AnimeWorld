import "./../../styles/app.scss";
import { Link } from "react-router-dom";
import { Fragment } from "react";

const Dropdown = ({ dropdownParams }) => {
  return (
    <div className="submenu">
      {dropdownParams.map((dropdownItem) => {
        return (
          <Fragment key={dropdownItem.title}>
            <div className="legend">{dropdownItem.title}</div>
            {dropdownItem.items.map((item) => {
              return (
                <Link
                  key={item.title}
                  className={`icon-${item.icon}`}
                  to={item.link}
                  tabIndex="-1"
                  state={{ title: item.title }}
                >
                  {item.title}
                </Link>
              );
            })}
          </Fragment>
        );
      })}
    </div>
  );
};

export default Dropdown;
