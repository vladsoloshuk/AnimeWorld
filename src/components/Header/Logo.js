import { RouteNames } from "../../const/routeNames";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../hooks/redux";
import { restoreCollectionFilter } from "../../store/reducers/PageParams";

const Logo = () => {
  const dispatch = useAppDispatch();

  const clearFilter = () => {
    dispatch(restoreCollectionFilter(["restoreCollectionFilter", true]));
  };

  return (
    <Link
      className="logo-container"
      to={RouteNames.HOME}
      onClick={clearFilter}
    >
      <div className="glyph"></div>
      <div className="logo"></div>
    </Link>
  );
};

export default Logo;
