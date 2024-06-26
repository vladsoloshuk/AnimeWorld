import { Link } from "react-router-dom";
import { useAppDispatch } from "../../hooks/redux";
import { UrlParts } from "../../const/urlConsts";
import { restoreFilter, updateFilter } from "../../store/reducers/FilterSlice";
import { restoreCollectionFilter } from "../../store/reducers/PageParams";
import { kindTransform } from "../../utils/textTransform";

const Header = ({ element, title }) => {
  const dispatch = useAppDispatch();

  let basicUrl = title === "Anime" ? UrlParts.ANIMES : title === "Manga" ? UrlParts.MANGAS : UrlParts.RANOBE;

  const kindBreadCrumb = () => {
    dispatch(restoreFilter());
    dispatch(updateFilter(["kind", element.kind]));
    dispatch(restoreCollectionFilter(["restoreCollectionFilter", false]));
  };

  // const genresBreadCrumb = () => {
  //   dispatch(updateFilter(["genres", element.genres[0].name]));
  //   dispatch(restoreCollectionFilter(["restoreCollectionFilter", false]));
  // };

  return (
    <header className="head">
      <h1>{element.name}</h1>
      <div className="b-breadcrumbs">
        <span>
          <Link
            className="b-link"
            to={`${basicUrl}`}
          >
            {title}
          </Link>
        </span>
        <span>
          <Link
            className="b-link"
            to={`${basicUrl}`}
            onClick={kindBreadCrumb}
          >
            {kindTransform(element.kind)}
          </Link>
        </span>
        {/* <span>
          <Link
            className="b-link"
            to={`${basicUrl}/genres/${element.kind}`}
            onClick={genresBreadCrumb}
          >
            {element.genres[0].name}
          </Link>
        </span> */}
      </div>
    </header>
  );
};

export default Header;
