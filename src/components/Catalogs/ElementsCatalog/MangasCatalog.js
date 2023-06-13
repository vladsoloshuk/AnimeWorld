import ShikimoriService from "../../../api/ShikimoriService";
import { mangaFilters, mangaRecomendaions, defaultMangasFilter} from "../../../const/filters";
import "./../../../styles/pages/p-elements_collection-index.scss";
import EmptyCatalog from "../EmptyCatalog/EmptyCatalog";

const MangasCatalog = () => {

  const fetchMangas = ShikimoriService.getMangas;

  return (
    <EmptyCatalog
      defaultFilter={defaultMangasFilter}
      fetchMethod={fetchMangas}
      elementsFilters={mangaFilters}
      recomendations={mangaRecomendaions}
    />
  );
};

export default MangasCatalog;
