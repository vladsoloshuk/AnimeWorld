import { Suspense, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { api } from "../../services/Api";
import { UrlParts } from "../../const/urlConsts";
import EmptyCatalogItem from "../Catalogs/EmptyCatalog/EmptyCatalogItem";
import Spinner from "../UI/Spinner/Spinner";

const Similar = () => {
  const { pathname } = useLocation();
  const [elements, setElements] = useState([]);

  const { data, isSuccess } = api.useGetElementQuery(pathname + UrlParts.SIMILAR);

  useEffect(() => {
    if (isSuccess) {
      setElements(data.slice(0, 7));
      console.log(data);
    }
  }, [data, isSuccess]);

  return (
    <Suspense fallback={Spinner}>
      {isSuccess && elements.length > 1 ? (
        <div className="block">
          <div className="subheadline">
            <Link to={""}>Similar</Link>
          </div>
          <div className="cc cc-similar">
            {isSuccess ? (
              elements.map((element) => (
                <EmptyCatalogItem
                  key={element.id}
                  element={element}
                  imageType="x96"
                />
              ))
            ) : (
              <Spinner />
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </Suspense>
  );
};

export default Similar;
