import { Link } from "react-router-dom";
import { hostUrl } from "../../../const/urlConsts";
import "./../../../styles/app.scss";

const EmptyCatalogItem = ({ title, preview, year, kind, url }) => {
  return (
    <article className="catalog-item">
      <Link
        className="catalog-item_cover"
        href={url}
      >
        <picture>
          <source srcSet={hostUrl + preview} />
          <img className="catalog-item_image"
            alt={title}
            src={hostUrl + preview}
          />
        </picture>
        <span
          className="catalog-item_title"
          href={url}
        >
          {title}
        </span>
        <span className="catalog-item_description">
          <span>{kind}</span>
          <span>{year}</span>
        </span>
      </Link>
    </article>
  );
};

export default EmptyCatalogItem;
