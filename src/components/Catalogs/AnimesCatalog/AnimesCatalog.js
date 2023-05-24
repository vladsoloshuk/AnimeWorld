import { useEffect, useRef, useState } from "react";
import AnimeServices from "../../../api/AnimeService";
import EmptyCatalog from "../EmptyCatalog/EmptyCatalog";
import { useObserver } from "../../../hooks/useObserver";
import useFetching from "../../../hooks/useFetching";
import Filter from "../../Filter/Filter";
import "./../../../styles/app.scss";
import { multipleFilter, uniteFilterObj } from "../../../utils/filter";

const AnimesCatalog = () => {
  const [animes, setAnimes] = useState([]);
  const [limit, setLimit] = useState(15);
  const [page, setPage] = useState(1);

  const [order, setOrder] = useState("ranked");
  const [kind, setKind] = useState("");
  const [status, setStatus] = useState("");
  const [season, setSeason] = useState("");
  const [score, setScore] = useState("");
  const [duration, setDuration] = useState("");
  const [rating, setRating] = useState("");
  const [genre, setGenre] = useState("");
  const [studio, setStudio] = useState("");

  const [filterParams, setfilterParams] = useState({
    page: page,
    limit: limit,
    order: order,
    kind: kind,
    status: status,
    season: season,
    score: score,
    duration: duration,
    rating: rating,
    genre: genre,
    studio: studio
  });

  // const lastElement = useRef();

  // const getPagesCount = (totalCount, limit) => {
  //   return Math.ceil(totalCount / limit);
  // };

  const [fetchAnimes, isAnimesLoading, animeError] = useFetching(async (limit, page, order, kind, status, season, score, duration, rating, genre, studio) => {
    const response = await AnimeServices.getAnimes({ limit, page, order, kind, status, season, score, duration, rating, genre, studio });
    setAnimes([...response.data]);
  });

  // useObserver(lastElement, isAnimesLoading, () => setPage(page + 1));

  // const getPagesArray = (totalPages) => {
  //   let result = [];
  //   for (let i = 0; i < totalPages; i++) {
  //     result.push(i + 1);
  //   }
  //   return result;
  // };
  const changePageHandler = (property) => {
    switch (property) {
      case "forward":
        setPage(page + 1);
        break;
      case "backward":
        setPage(page - 1);
        break;
      default:
        console.log("Standart!");
    }
  };

  const changeFilterHanler = (property, value) => {
    let result;
    console.log(property, value);
    switch (property) {
      case "order":
        uniteFilterObj(filterParams, property, value);
        setOrder(value);
        break;
      case "kind":
        result = multipleFilter(kind, value);
        uniteFilterObj(filterParams, property, result);
        setKind(result);
        break;
      case "status":
        result = multipleFilter(status, value);
        uniteFilterObj(filterParams, property, result);
        setStatus(result);
        break;
      case "season":
        result = multipleFilter(season, value);
        uniteFilterObj(filterParams, property, result);
        setSeason(result);
        break;
      default:
        console.log(`Sorry!`);
    }
  };

  useEffect(() => {
    fetchAnimes(limit, page, order, kind, status, season, score, duration, rating, genre, studio);
  }, [limit, page, order, kind, status, season, score, duration, rating, genre, studio]);

  const animeRecomendaions = {
    title: "recomendations",
    list: [
      { title: "Favorites", link: "" },
      { title: "From the community", link: "" },
      { title: "Personalized", link: "" }
    ]
  };

  const animeFilters = {
    method: changeFilterHanler,
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
        ]
      },
      {
        name: "status",
        type: "checkbox",
        params: [
          { title: "Announced", value: "anons" },
          { title: "Ongoing", value: "ongoing" },
          { title: "Released", value: "released" },
          { title: "Latest", value: "latest" }
        ]
      },
      {
        name: "kind",
        type: "checkbox",
        params: [
          { title: "TV Series", value: "tv" },
          { title: "Short", value: "tv_13", sub: true },
          { title: "Medium", value: "tv_24", sub: true },
          { title: "Long", value: "tv_48", sub: true },
          { title: "Movie", value: "movie" },
          { title: "Ova", value: "ova" },
          { title: "Ona", value: "ona" },
          { title: "Special", value: "special" },
          { title: "Music", value: "music" }
        ]
      },
      {
        name: "season",
        type: "checkbox",
        params: [
          { title: "2023", value: "2023" },
          { title: "2022", value: "2022" },
          { title: "2020-2021", value: "2020_2021" },
          { title: "2015-2019", value: "2015_2019" },
          { title: "2010-2014", value: "2010_2014" },
          { title: "2000-2010", value: "2000_2010" },
          { title: "199x", value: "199x" },
          { title: "198x", value: "198x" },
          { title: "Older", value: "ancient" }
        ]
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
        <div className="pagination">
          <a
            className={`"link link-prev" ${page < 2 ? "disabled" : ""}`}
            data-field="backward"
            href="/"
            onClick={(event) => changePageHandler(event.target.getAttribute("data-field"))}
          >
            ← Back
          </a>
          <div className="no-hover">#{page}</div>
          <a
            className="link link-prev"
            data-field="forward"
            href="/"
            onClick={(event) => changePageHandler(event.target.getAttribute("data-field"))}
          >
            Forward →
          </a>
        </div>
        <div className="menu-slide-outer">
          <EmptyCatalog elements={animes} />
          <Filter
            recomendations={animeRecomendaions}
            filter={animeFilters}
            filterParams={filterParams}
            changeFilter={changeFilterHanler}
          />
        </div>
        {/* <div ref={lastElement}></div> */}
      </div>
    </section>
  );
};

export default AnimesCatalog;
