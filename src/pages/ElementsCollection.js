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
  const { state } = useLocation();
  const pageParams = useAppSelector((state) => state.pageParams);

  useEffect(() => {
    dispatch(updateTitle(state.title));
    if (pageParams.restoreCollectionFilter) {
      dispatch(restoreFilter());
    }
  });

  return (
    <EmptyCatalog
      url={state.title === "Anime" ? UrlParts.ANIMES : state.title === "Manga" ? UrlParts.MANGAS : UrlParts.RANOBE}
      recomendations={state.title === "Anime" ? animeRecomendaions : state.title === "Manga" ? mangaRecomendaions : ranobeRecomendaions}
      filterUI={state.title === "Anime" ? animeFilters : state.title === "Manga" ? mangaFilters : ranobeFilters}
    />
  );
};

export default ElementsCollection;
