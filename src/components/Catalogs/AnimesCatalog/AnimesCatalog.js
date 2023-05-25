import { useEffect, useRef, useState } from "react";
import AnimeServices from "../../../api/AnimeService";
import EmptyCatalog from "../EmptyCatalog/EmptyCatalog";
import { useObserver } from "../../../hooks/useObserver";
import useFetching from "../../../hooks/useFetching";
import Filter from "../../Filter/Filter";
import "./../../../styles/app.scss";
import { multipleFilter } from "../../../utils/filter";
import { animeFilters, animeRecomendaions } from "../../../const/filters";
import { Link } from "react-router-dom";

const AnimesCatalog = () => {
  const [animes, setAnimes] = useState([]);
  const [filterParams, setFilterParams] = useState({
    page: 1,
    limit: 15,
    order: "ranked",
    kind: "",
    status: "",
    season: "",
    score: "",
    duration: "",
    rating: "",
    genre: "",
    studio: ""
  });

 const changePageHandler = (property) => {
    switch (property) {
      case "forward":
        setAnimes([]);
        setFilterParams({ ...filterParams, page: filterParams["page"] + 1 });
        break;
      case "backward":
        setAnimes([]);
        setFilterParams({ ...filterParams, page: filterParams["page"] < 2 ? 1 : filterParams["page"] - 1 });
        break;
      default:
        console.log("Default.");
    }
  };

  const changeFilterHanler = (property, value) => {
    let result;
    console.log(property, value);
    switch (property) {
      case "order":
        setFilterParams({ ...filterParams, [property]: value });
        break;
      case "kind":
      case "status":
      case "season":
        result = multipleFilter(filterParams[property], value);
        setFilterParams({ ...filterParams, [property]: result });
        break;
      default:
        console.log(`Sorry!`);
    }
  };
  //fetching setup
  const [fetchAnimes, isAnimesLoading, animeError] = useFetching(async (filterParams) => {
    const response = await AnimeServices.getAnimes({ ...filterParams });
    setAnimes([...animes, ...response.data]);
  });

  useEffect(() => {
    fetchAnimes(filterParams);
  }, [filterParams]);

  //observer setup
  const lastElement = useRef();
  useObserver(lastElement, isAnimesLoading, () => setFilterParams({ ...filterParams, page: filterParams["page"] + 1 }));

  return (
    <section className="l-page">
      <div>
        <header className="head">
          <h1>Anime</h1>
          <div className="notice">Description</div>
        </header>
        <div className="pagination">
          <Link
            className={`"link link-prev" ${filterParams.page < 2 ? "disabled" : ""}`}
            data-field="backward"
            onClick={(event) => changePageHandler(event.target.getAttribute("data-field"))}
          >
            ← Back
          </Link>
          <div className="no-hover">#{filterParams.page}</div>
          <Link
            className="link link-prev"
            data-field="forward"
            onClick={(event) => changePageHandler(event.target.getAttribute("data-field"))}
          >
            Forward →
          </Link>
        </div>
        <div className="menu-slide-outer">
          <EmptyCatalog elementsArr={animes} />
          <Filter
            recomendations={animeRecomendaions}
            filter={animeFilters}
            filterParams={filterParams}
            changeFilter={changeFilterHanler}
          />
        </div>
        <div ref={lastElement}></div>
      </div>
    </section>
  );
};

export default AnimesCatalog;
