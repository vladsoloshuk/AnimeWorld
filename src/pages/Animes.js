// import MainSectionCard from "../components/UI/Cards/MainSectionCard";
import { useAppDispatch } from "../hooks/redux";
import { animeFilters, animeRecomendaions } from "../const/filters";
import { updateTitle } from "../store/reducers/PageParams";
import { UrlParts } from "../const/urlConsts";
import { useEffect } from "react";

import EmptyCatalog from "../components/Catalogs/EmptyCatalog/EmptyCatalog";
import { restoreFilter } from "../store/reducers/FilterSlice";
// import CatalogTooltip from "../components/Catalogs/EmptyCatalog/CatalogTooltip/CatalogTooltip";

const Animes = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(updateTitle("Anime"));
    dispatch(restoreFilter());
  });

  return (
    <EmptyCatalog
      url={UrlParts.ANIMES}
      recomendations={animeRecomendaions}
      filterUI={animeFilters}
    />
  );
};

export default Animes;
