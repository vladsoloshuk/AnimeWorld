import { Suspense, useEffect, useState } from "react";
import Spinner from "../../UI/Spinner/Spinner";
import { Link, useLocation } from "react-router-dom";
import Preview from "../../Preview/Preview";
import RelatedInformation from "../RelatedInformation";
import { UrlParts } from "../../../const/urlConsts";
import { api } from "../../../services/Api";

const Related = () => {
  const { pathname } = useLocation();
  const [elements, setElements] = useState([]);

  const { data, isSuccess } = api.useGetElementQuery(pathname + UrlParts.RELATED);

  useEffect(() => {
    if (isSuccess) {
      setElements(data);
      // console.log(data);
    }
  }, [data, isSuccess]);

  return (
    <Suspense fallback={Spinner}>
      {isSuccess && elements.length > 0 ? (
        <div className="c-column block_m">
          <div className="b-options-floated mobile-phone">
            <Link to={``}>Directly</Link>
            <Link to={``}>Chronology</Link>
            <Link to={``}>Franchise</Link>
          </div>
          <div className="subheadline">Related</div>

          <div className="cc">
            {elements.map((element) => (
              <div
                key={element.anime === null ? element.manga.id : element.anime.id}
                className="b-db_entry-variant-list_item"
              >
                <Link
                  className="image bubbled-processed"
                  to={``}
                >
                  <Preview
                    element={element}
                    imageType={element[`${element.anime === null ? "manga" : "anime"}`].image.x48}
                  />
                </Link>
                <RelatedInformation
                  element={element[`${element.anime === null ? "manga" : "anime"}`]}
                  relation={element.relation}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </Suspense>
  );
};

export default Related;
