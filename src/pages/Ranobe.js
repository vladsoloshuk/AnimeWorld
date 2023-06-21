// import MainSectionCard from "../components/UI/Cards/MainSectionCard";
import EmptyCatalog from "../components/Catalogs/EmptyCatalog/EmptyCatalog";
import { useAppDispatch } from "../hooks/redux";
import { ranobeFilters, ranobeRecomendaions } from "../const/filters";
import { updateTitle } from "../store/reducers/PageParams";
import { UrlParts } from "../const/urlConsts";
import { useEffect } from "react";
import { restoreFilter } from "../store/reducers/FilterSlice";

const Ranobe = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(updateTitle("Ranobe"));
    dispatch(restoreFilter());
  });

  return (
    <EmptyCatalog
      recomendations={ranobeRecomendaions}
      filterUI={ranobeFilters}
      url={UrlParts.RANOBE}
    />
  );
};

export default Ranobe;
