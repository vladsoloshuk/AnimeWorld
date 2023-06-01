import { Link } from "react-router-dom";
import { hostUrl } from "../../../const/urlConsts";
import "./../../../styles/pages/p-elements_collection-index.scss";

const EmptyCatalogItem = ({ title, preview, year, kind, url }) => {
  return (
    <article className="c-column b-catalog_entry c-anime">
      <Link
        className="cover anime-tooltip-processed"
        href={url}
      >
        <span className="image-decor">
          <span className="image-cutter">
            <picture>
              <source
                srcSet={hostUrl + preview}
                type="image/webp"
              />
              <img
                alt={title}
                src={hostUrl + preview}
                srcSet={hostUrl + preview}
              />
            </picture>
          </span>
        </span>
        <span className="title left_aligned">{title}</span>
        <span className="misc">
          <span>{kind}</span>
          <span>{year}</span>
        </span>
      </Link>
    </article>
  );
};

export default EmptyCatalogItem;
