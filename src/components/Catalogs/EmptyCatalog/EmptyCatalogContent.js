import EmptyCatalogItem from "./EmptyCatalogItem";
import Spinner from "../../UI/Spinner/Spinner";
import { useEffect, useState, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { api } from "../../../services/Api";
import useObserver from "../../../hooks/useObserver";
import { changePage } from "../../../store/reducers/FilterSlice";
import Trigger from "../../UI/Trigger/Trigger";

const EmptyCatalogContent = ({ url }) => {
  const dispatch = useAppDispatch();
  const queryParams = useAppSelector((state) => state.filter);
  const [elements, setElements] = useState([]);
  const [isObserverLoading, setIsObserverLoading] = useState(false);

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
