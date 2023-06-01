import AnimeServices from "../../../api/AnimeService";
import { animeFilters, animeRecomendaions, defaultAnimesFilter } from "../../../const/filters";
import "./../../../styles/pages/p-elements_collection-index.scss";
import EmptyCatalog from "../EmptyCatalog/EmptyCatalog";

const AnimesCatalog = () => {
  
  const fetchAnimes = AnimeServices.getAnimes;

  return (
    <EmptyCatalog
      defaultFilter={defaultAnimesFilter}
      fetchMethod={fetchAnimes}
      elementsFilters={animeFilters}
      recomendations={animeRecomendaions}
    />
  );
};

export default AnimesCatalog;
