// import MainSectionCard from "../components/UI/Cards/MainSectionCard";
import EmptyCatalog from "../components/Catalogs/EmptyCatalog/EmptyCatalog";
import { useAppDispatch } from "../hooks/redux";
import { mangaFilters, mangaRecomendaions } from "../const/filters";
import { updateTitle } from "../store/reducers/PageParams";
import { UrlParts } from "../const/urlConsts";
import { useEffect } from "react";
import { restoreFilter } from "../store/reducers/FilterSlice";

const Mangas = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(updateTitle("Manga"));
    dispatch(restoreFilter());
  });

  return (
    <EmptyCatalog
      recomendations={mangaRecomendaions}
      filterUI={mangaFilters}
      url={UrlParts.MANGAS}
    />
  );
};

export default Mangas;
