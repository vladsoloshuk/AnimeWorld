import { Link } from "react-router-dom";
import Preview from "../../Preview/Preview";

const EmptyCatalogItem = ({ element }) => {
  return (
    <article className="c-column b-catalog_entry c-anime">
      <Link
        element={element}
        className="cover anime-tooltip-processed"
        to={`${element.url}`}
        state={element}
      >
        <span className="image-decor">
          <span className="image-cutter">
            <Preview element={element} imageType={element.image.preview}/>
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
