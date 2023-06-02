import { Link } from "react-router-dom";
import { UrlParts, hostUrl } from "../../../const/urlConsts";
import Preview from "../../Preview/Preview";

const EmptyCatalogItem = ({ element }) => {
  return (
    <article className="c-column b-catalog_entry c-anime">
      <Link
        className="cover anime-tooltip-processed"
        href={hostUrl + UrlParts.API + element.url}
      >
        <span className="image-decor">
          <span className="image-cutter">
            <Preview element={element} />
          </span>
        </span>
        <span className="title left_aligned">{element.name}</span>
        <span className="misc">
          <span>{element.kind}</span>
          <span>{element.aired_on ? element.aired_on.split("-")[0] : ""}</span>
        </span>
      </Link>
    </article>
  );
};

export default EmptyCatalogItem;
