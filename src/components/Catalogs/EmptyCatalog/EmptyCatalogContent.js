import EmptyCatalogItem from "./EmptyCatalogItem";
import Spinner from "../../UI/Spinner/Spinner";
import { useEffect, useState, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { api } from "../../../services/Api";
import useObserver from "../../../hooks/useObserver";
import { changePage } from "../../../store/reducers/FilterSlice";
import Trigger from "../../UI/Trigger/Trigger";
import { UrlParts } from "../../../const/urlConsts";

const EmptyCatalogContent = () => {
  const dispatch = useAppDispatch();
  const title = useAppSelector((state) => state.pageParams).title;
  const queryParams = useAppSelector((state) => state.filter);
  const [elements, setElements] = useState([]);
  const [isObserverLoading, setIsObserverLoading] = useState(false);
  let url = title === "Anime" ? UrlParts.ANIMES : title === "Manga" ? UrlParts.MANGAS : UrlParts.RANOBE;
  const { data, isFetching, isSuccess } = api.useGetElementsQuery({ url, queryParams });

  //rerendering if data has been changed
  useEffect(() => {
    if (isSuccess && isObserverLoading) {
      setElements([...elements, ...data]);
    }
    if (isSuccess && !isObserverLoading) {
      setElements(data);
    }
    setIsObserverLoading(false);
  }, [data]);

  //observer setup
  const lastElement = useRef();
  const observerFunctions = () => {
    dispatch(changePage("forward"));
    setIsObserverLoading(true);
  };
  useObserver(lastElement, isFetching, () => observerFunctions());

  return (
    <section className="l-content b-search-results">
      <div className="cc-entries">
        {isSuccess ? (
          elements.map((element) => (
            <EmptyCatalogItem
              key={element.id}
              element={element}
              imageType="preview"
            />
          ))
        ) : (
          <Spinner />
        )}
      </div>
      {isSuccess ? <Trigger target={lastElement}></Trigger> : ""}
    </section>
  );
};

export default EmptyCatalogContent;
