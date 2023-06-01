import Header from "../components/Header/Header";
import MangasCatalog from "../components/Catalogs/ElementsCatalog/MangasCatalog";

import { Fragment } from "react";
import { headerParams } from "../const/header";

const Mangas = () => {
  const headerObj = {...headerParams, "title" : "Manga", "icon": "manga"}
  return (
    <Fragment>
      <Header headerParams={headerObj}/>
      <MangasCatalog />
    </Fragment>
  );
};

export default Mangas;
