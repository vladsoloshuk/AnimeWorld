import { useEffect, useRef, useState } from "react";
import AnimeServices from "../../../api/AnimeService";
import EmptyCatalog from "../EmptyCatalog/EmptyCatalog";
import { useObserver } from "../../../hooks/useObserver";
import useFetching from "../../../hooks/useFetching";
import Filter from "../../Filter/Filter";
import "./../../../styles/app.scss";

const AnimesCatalog = () => {
  const [animes, setAnimes] = useState([]);
  const [limit, setLimit] = useState(15);
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState("ranked");
  const [status, setStatus] = useState("");

  const lastElement = useRef();

  const animeFilters = {
    recomendations: {
      favorites: "Favorites",
      community: "From the community",
      personal: "Personalized"
    },
    status: {
      anons: "Announced",
      ongoing: "Ongoing",
      released: "Released"
    }
  };

  const changeStatusHandler = (event) => {
    event.target.checked ? setStatus(event.target.getAttribute("data-value")) : setStatus("");
  };

  const changeOrderHandler = (event) => {
    event.target.checked ? setOrder(event.target.getAttribute("data-value")) : setOrder("ranked");
  };

  // const getPagesCount = (totalCount, limit) => {
  //   return Math.ceil(totalCount / limit);
  // };

  const [fetchAnimes, isAnimesLoading, animeError] = useFetching(async (limit, page, order, status) => {
    const response = await AnimeServices.getAnimes({ limit, page, order, status});
    //setAnimes([...animes, ...response.data]);
    setAnimes([...response.data]);
  });

  useObserver(lastElement, isAnimesLoading, () => setPage(page + 1));

  // const getPagesArray = (totalPages) => {
  //   let result = [];
  //   for (let i = 0; i < totalPages; i++) {
  //     result.push(i + 1);
  //   }
  //   return result;
  // };

  useEffect(() => {
    fetchAnimes(limit, page, order, status);
  }, [limit, page, order, status]);

  return (
    <section className="l-page">
      <div>
        <header className="head">
          <h1>Anime</h1>
          <div className="notice">Description</div>
        </header>
        <div className="pagination">{page}</div>
        <div className="menu-slide-outer">
          <EmptyCatalog elements={animes} />
          <Filter
            filter={animeFilters}
            changeStatusHandler={changeStatusHandler}
            changeOrderHandler={changeOrderHandler}
          />
        </div>
        <div ref={lastElement}></div>
      </div>
    </section>
  );
};

export default AnimesCatalog;
