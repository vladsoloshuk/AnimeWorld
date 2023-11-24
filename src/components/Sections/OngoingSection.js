import { Link } from "react-router-dom";
import { api } from "../../services/Api";
import { UrlParts } from "../../const/urlConsts";
import { Suspense, useEffect, useState } from "react";
import Spinner from "../UI/Spinner/Spinner";
import EmptyCatalogItem from "../Catalogs/EmptyCatalog/EmptyCatalogItem";
import { useAppDispatch } from "../../hooks/redux";
import { updateFilter } from "../../store/reducers/FilterSlice";
import { restoreCollectionFilter } from "../../store/reducers/PageParams";

const OngoingSection = () => {
  const [elements, setElements] = useState([]);

  const dispatch = useAppDispatch();

  const queryParams = {
    limit: 8,
    status: "ongoing",
    order: "popularity",
    season: 2023
  };
  const url = UrlParts.ANIMES;
  const { data, isSuccess } = api.useGetElementsQuery({ url, queryParams });

  const param = "/status/ongoing";
  const loadFuction = () => {
    dispatch(updateFilter(["status", "ongoing"]));
    dispatch(restoreCollectionFilter(["restoreCollectionFilter", false]));
  };

  //rerendering if data has been changed
  useEffect(() => {
    if (isSuccess) {
      setElements(data);
    }
  }, [data, isSuccess]);

  return (
    <Suspense fallback={Spinner}>
      <div className="block2">
        <div className="subheadline linkheadline m15">
          <Link
            to={`${UrlParts.ANIMES}${param}`}
            onClick={loadFuction}
          >
            Now on screens
          </Link>
        </div>
        <div className="fc-ongoings">
          <div className="mobile-slider-prev bright" />
          <div className="mobile-slider-next bright" />
          <div className="inner">
            {isSuccess ? (
              elements.map((element) => (
                <EmptyCatalogItem
                  key={element.id}
                  element={element}
                />
              ))
            ) : (
              <Spinner />
            )}
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default OngoingSection;
