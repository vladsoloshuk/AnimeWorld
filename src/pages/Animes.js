// import MainSectionCard from "../components/UI/Cards/MainSectionCard";
import { useAppDispatch } from "../hooks/redux";
import { animeFilters, animeRecomendaions } from "../const/filters";
import { updateTitle } from "../store/reducers/PageParams";
import { UrlParts } from "../const/urlConsts";
import { useEffect, useState } from "react";

import EmptyCatalog from "../components/Catalogs/EmptyCatalog/EmptyCatalog";
import { restoreFilter } from "../store/reducers/FilterSlice";
// import CatalogTooltip from "../components/Catalogs/EmptyCatalog/CatalogTooltip/CatalogTooltip";

const Animes = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(updateTitle("Anime"));
    dispatch(restoreFilter());
  });

  const [url, setUrl] = useState(UrlParts.ANIMES);
  const [recomendations, setRecomendations] = useState(animeRecomendaions);
  const [filterUI, setFilterUI] = useState(animeFilters);

  return (
    <EmptyCatalog
      url={url}
      recomendations={recomendations}
      filterUI={filterUI}
    />
  );
};

export default Animes;
