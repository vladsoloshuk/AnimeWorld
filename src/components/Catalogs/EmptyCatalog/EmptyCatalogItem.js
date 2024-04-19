import { Link } from "react-router-dom";
import Preview from "../../Preview/Preview";
import { kindTransform, urlTransform } from "../../../utils/textTransform";

const EmptyCatalogItem = ({ element, imageType }) => {
  return (
    <article className="c-column b-catalog_entry c-anime">
      <Link
        element={element}
        className="cover anime-tooltip-processed"
        to={urlTransform(element.kind, element.url)}
        state={element}
      >
        <span className="image-decor">
          <span className="image-cutter">
            <Preview
              element={element}
              imageType={element.image[imageType]}
            />
          </span>
        </span>
        <span className={`title ${imageType === "preview" ? "left_aligned" : "two_lined"}`}>{element.name}</span>
        {imageType === "preview" ? (
          <span className="misc">
            <span>{kindTransform(element.kind)}</span>
            <span>{element.aired_on ? element.aired_on.split("-")[0] : ""}</span>
          </span>
        ) : (
          ""
        )}
      </Link>
    </article>
  );
};

export default EmptyCatalogItem;
