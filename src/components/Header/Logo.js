import "./../../styles/app.scss";
import { Link } from "react-router-dom";
import { RoutesNames } from "../../router";

const Logo = () => {
  return (
    <Link
      className="logo-container"
      to={RoutesNames.HOME}
    >
      <div className="glyph"></div>
      <div className="logo"></div>
    </Link>
  );
};

export default Logo;
