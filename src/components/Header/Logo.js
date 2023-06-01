import "./../../styles/app.scss";
import { Link } from "react-router-dom";
import { RouteNames } from "../../router";

const Logo = () => {
  return (
    <Link
      className="logo-container"
      to={RouteNames.HOME}
    >
      <div className="glyph"></div>
      <div className="logo"></div>
    </Link>
  );
};

export default Logo;
