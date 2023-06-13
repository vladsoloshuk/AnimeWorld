import { RouteNames } from "../../const/routeNames";
import { Link } from "react-router-dom";

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
