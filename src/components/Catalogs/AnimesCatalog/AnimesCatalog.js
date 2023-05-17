import { useEffect, useRef, useState } from "react";
import AnimeServices from "../../../api/AnimeService";
import EmptyCatalog from "../EmptyCatalog/EmptyCatalog";
import { useObserver } from "../../../hooks/useObserver";
import useFetching from "../../../hooks/useFetching";
import Filter from "../../Filter/Filter";
import "./../../../styles/app.scss";
import { multipleCheckboxFilter } from "../../../utils/filter";

const AnimesCatalog = () => {
  const [animes, setAnimes] = useState([]);
  const [limit, setLimit] = useState(15);
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState("ranked");
  const [status, setStatus] = useState("");
  const [kind, setKind] = useState("");

  const lastElement = useRef();

  // const getPagesCount = (totalCount, limit) => {
  //   return Math.ceil(totalCount / limit);
  // };

  const [fetchAnimes, isAnimesLoading, animeError] = useFetching(async (limit, page, order, status, kind) => {
    const response = await AnimeServices.getAnimes({ limit, page, order, status, kind });
    // setAnimes([...animes, ...response.data]);
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
    fetchAnimes(limit, page, order, status, kind);
  }, [limit, page, order, status, kind]);

  const changeOrderHandler = (event) => {
    if (event.target.checked) {
      setOrder(event.target.getAttribute("data-value"));
    } else {
      setOrder("ranked");
    }
  };

  const changeStatusHandler = (event, s = status) => {
    const result = multipleCheckboxFilter(event, s);
    setStatus(result);
  };

  const changeKindHandler = (event, k = kind) => {
    const result = multipleCheckboxFilter(event, k);
    setKind(result);
  };

  const animeFilters = {
    recomendations: {
      name: "recomendations",
      params: [
        { title: "Favorites", link: "" },
        { title: "From the community", link: "" },
        { title: "Personalized", link: "" }
      ]
    },
    sorting: [
      {
        name: "order",
        type: "radio",
        params: [
          { title: "By rank", value: "ranked" },
          { title: "By popularity", value: "popularity" },
          { title: "In alphabetical order", value: "name" },
          { title: "By release date", value: "aired_on" },
          { title: "Random", value: "random" },
          { title: "By ID", value: "id" }
        ],
        method: changeOrderHandler
      },
      {
        name: "status",
        type: "checkbox",
        params: [
          { title: "Announced", value: "anons" },
          { title: "Ongoing", value: "ongoing" },
          { title: "Released", value: "released" },
          { title: "Latest", value: "latest" }
        ],
        method: changeStatusHandler
      },
      {
        name: "kind",
        type: "checkbox",
        params: [
          { title: "TV Series", value: "tv" },
          { title: "Movie", value: "movie" },
          { title: "Ova", value: "ova" },
          { title: "Ona", value: "ona" },
          { title: "Special", value: "special" },
          { title: "Music", value: "music" }
        ],
        method: changeKindHandler
      }
    ]
  };

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
            changeKindHandler={changeKindHandler}
          />
        </div>
        <div ref={lastElement}></div>
      </div>
    </section>
  );
};

export default AnimesCatalog;
