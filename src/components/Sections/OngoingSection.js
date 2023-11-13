import { Link } from "react-router-dom";
import { api } from "../../services/Api";
import { UrlParts } from "../../const/urlConsts";
import { Suspense, useEffect, useState } from "react";
import Spinner from "../UI/Spinner/Spinner";
import EmptyCatalogItem from "../Catalogs/EmptyCatalog/EmptyCatalogItem";
import { useAppDispatch } from "../../hooks/redux";
import { updateFilter } from "../../store/reducers/FilterSlice";

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
  const { data, isFetching, isSuccess } = api.useGetElementsQuery({ url, queryParams });

  //rerendering if data has been changed
  useEffect(() => {
    if (isSuccess) {
      setElements(data);
    }
  }, [data, isSuccess]);

  return (
    <Suspense fallback={Spinner}>
      <div className="block2">
        <div className="subheadline linkheadline">
          <Link
            to={`${UrlParts.ANIMES}/status/ongoing`}
            onClick={() => dispatch(updateFilter(["status", "ongoing"]))}
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
