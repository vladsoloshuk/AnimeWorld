import { Suspense, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { api } from "../../../services/Api";
import { UrlParts } from "../../../const/urlConsts";
import Spinner from "../../UI/Spinner/Spinner";
import Preview from "../../Preview/Preview";

const Characters = () => {
  const { pathname } = useLocation();
  const [elements, setElements] = useState([]);

  const { data, isSuccess } = api.useGetElementQuery(pathname + UrlParts.ROLES);

  useEffect(() => {
    if (isSuccess) {
      const fillteredData = data.filter((obj) => obj.roles[0] === "Main" && obj.person === null).map((obj) => obj.character);
      setElements(fillteredData);
      // console.log(fillteredData);
    }
  }, [data, isSuccess]);

  return (
    <Suspense fallback={Spinner}>
      <div className="cc-characters">
        <div className="c-characters m0">
          <div className="subheadline">
            <Link to={""}>Main Characters</Link>
          </div>
          {isSuccess ? (
            elements.map((element) => (
              <article
                key={element.id}
                className="c-column b-catalog_entry c-character"
              >
                <Link
                  className="cover anime-tooltip-processed"
                  to={``}
                >
                  <span className="image-decor">
                    <span className="image-cutter">
                      <Preview
                        element={element}
                        imageType={element.image.x96}
                      />
                    </span>
                  </span>
                  <span
                    className="title two_lined"
                    itemProp="name"
                  >
                    <span className="name-en">{element.name}</span>
                  </span>
                </Link>
              </article>
            ))
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    </Suspense>
  );
};

export default Characters;
