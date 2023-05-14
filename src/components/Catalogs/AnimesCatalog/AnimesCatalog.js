import { useEffect, useRef, useState } from "react";
import AnimeServices from "../../../api/AnimeService";
import classes from "./AnimesCatalog.module.scss";
import EmptyCatalog from "../EmptyCatalog/EmptyCatalog";
import { useObserver } from "../../../hooks/useObserver";
import useFetching from "../../../hooks/useFetching";
import Filter from "../../Filter/Filter";

const AnimesCatalog = () => {
  const [animes, setAnimes] = useState([]);
  const [limit, setLimit] = useState(50);
  const [page, setPage] = useState(1);

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
  }

  // const getPagesCount = (totalCount, limit) => {
  //   return Math.ceil(totalCount / limit);
  // };

  const [fetchAnimes, isAnimesLoading, animeError] = useFetching(async (limit, page) => {
    const response = await AnimeServices.getAnimes(limit, page);
    setAnimes([...animes, ...response.data]);
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
    fetchAnimes(limit, page);
  }, [page, limit]);

  return (
    <div className={classes.catalog}>
      <section className={classes.catalog_section}>
        <EmptyCatalog elements={animes} />

        <div ref={lastElement}></div>
      </section>
      <Filter filter={animeFilters}/>
    </div>
  );
};

export default AnimesCatalog;
