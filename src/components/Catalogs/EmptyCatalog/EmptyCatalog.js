import Pagination from "../../Pagination/Pagination";
import EmptyCatalogContent from "../EmptyCatalog/EmptyCatalogContent";
import Filter from "../../Filter/Filter";

import useObserver from "../../../hooks/useObserver";
import useFetching from "../../../hooks/useFetching";
import { useEffect, useRef, useState } from "react";
import { multipleFilter } from "../../../utils/filter";

const EmptyCatalog = ({ defaultFilter, fetchMethod, elementsFilters, recomendations }) => {
  const [elements, setElements] = useState([]);
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const [filterParams, setFilterParams] = useState(defaultFilter);

  //changing page
  const changePageHandler = (property) => {
    switch (property) {
      case "forward":
        setElements([]);
        setFilterParams({ ...filterParams, page: filterParams["page"] + 1 });
        break;
      case "backward":
        setElements([]);
        setFilterParams({ ...filterParams, page: filterParams["page"] < 2 ? 1 : filterParams["page"] - 1 });
        break;
      default:
        console.log("Default.");
    }
  };

  //changing filter
  const changeFilterHanler = (property, value) => {
    let result;
    console.log(property, value);
    switch (property) {
      case "order":
        setElements([]);
        setFilterParams({ ...filterParams, [property]: value, page: 1 });
        break;
      case "kind":
      case "status":
      case "season":
      case "score":
      case "duration":
      case "rating":
      case "genre":
      case "studio":
      case "franchise":
      case "mylist":
      case "publisher":
        setElements([]);
        result = multipleFilter(filterParams[property], value);
        setFilterParams({ ...filterParams, [property]: result, page: 1 });
        break;
      default:
        console.log("Default.");
    }
  };

  //toggle filter menu for small devices
  const menuToggleHandler = () => {
    setIsMenuExpanded(!isMenuExpanded);
  };

  //fetching setup
  const [fetchElements, isElementLoading, elementFetchError] = useFetching(async (filterParams) => {
    const response = await fetchMethod({ ...filterParams });
    setElements([...elements, ...response.data]);
  });

  //observer setup
  const lastElement = useRef();
  useObserver(lastElement, isElementLoading, () => setFilterParams({ ...filterParams, page: filterParams["page"] + 1 }));

  //rerendering if filter params have been changed
  useEffect(() => {
    fetchElements(filterParams);
  }, [filterParams]);

  return (
    <section className={`p-elements_collection-index x1200 l-page${isMenuExpanded ? " menu-expanded" : ""}`}>
      <div>
        <header className="head">
          <h1>Anime</h1>
          <div className="notice">This page displays anime sorted by rating</div>
        </header>
        <Pagination
          filterParams={filterParams}
          changePageHandler={changePageHandler}
        />
        <div
          className="menu-toggler"
          onClick={menuToggleHandler}
        >
          <div className="toggler"></div>
        </div>
        <div className="menu-slide-outer x199">
          <div className="menu-slide-inner">
            <EmptyCatalogContent elementsArr={elements} />
            <Filter
              recomendations={recomendations}
              filter={elementsFilters}
              filterParams={filterParams}
              changeFilter={changeFilterHanler}
            />
          </div>
        </div>
        <div ref={lastElement}></div>
      </div>
    </section>
  );
};

export default EmptyCatalog;
