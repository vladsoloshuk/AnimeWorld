// import MainSectionCard from "../components/UI/Cards/MainSectionCard";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
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
  let title = "";
  RegExp(`${UrlParts.ANIMES}`).test(pathname) ? (title = "Anime") : RegExp(`${UrlParts.MANGAS}`).test(pathname) ? (title = "Manga") : (title = "Ranobe");
  const pageParams = useAppSelector((state) => state.pageParams);

  useEffect(() => {
    dispatch(updateTitle(title));
    if (pageParams.restoreCollectionFilter) {
      dispatch(restoreFilter());
    }
  });

  return <EmptyCatalog />;
};

export default ElementsCollection;
