// import MainSectionCard from "../components/UI/Cards/MainSectionCard";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { animeFilters, animeRecomendaions, mangaFilters, mangaRecomendaions, ranobeFilters, ranobeRecomendaions } from "../const/filters";
import { updateTitle } from "../store/reducers/PageParams";
import { UrlParts } from "../const/urlConsts";
import { useEffect } from "react";

import EmptyCatalog from "../components/Catalogs/EmptyCatalog/EmptyCatalog";
import { restoreFilter } from "../store/reducers/FilterSlice";
import { useLocation } from "react-router";
// import CatalogTooltip from "../components/Catalogs/EmptyCatalog/CatalogTooltip/CatalogTooltip";

const ElementsCollection = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  let title;
  RegExp(`${UrlParts.ANIMES}`).test(pathname) ? (title = "Anime") : RegExp(`${UrlParts.MANGAS}`).test(pathname) ? (title = "Manga") : (title = "Ranobe");
  const pageParams = useAppSelector((state) => state.pageParams);

  useEffect(() => {
    dispatch(updateTitle(title));
    if (pageParams.restoreCollectionFilter) {
      dispatch(restoreFilter());
    }
  });

  return (
    <EmptyCatalog
      url={title === "Anime" ? UrlParts.ANIMES : title === "Manga" ? UrlParts.MANGAS : UrlParts.RANOBE}
      recomendations={title === "Anime" ? animeRecomendaions : title === "Manga" ? mangaRecomendaions : ranobeRecomendaions}
      filterUI={title === "Anime" ? animeFilters : title === "Manga" ? mangaFilters : ranobeFilters}
    />
  );
};

export default ElementsCollection;
