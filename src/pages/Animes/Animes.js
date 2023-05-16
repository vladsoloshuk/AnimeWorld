import Header from "../../components/Header/Header";

import AnimesCatalog from "../../components/Catalogs/AnimesCatalog/AnimesCatalog";
import MainSectionCard from "../../components/UI/Cards/MainSectionCard";
import { Fragment } from "react";

const Animes = () => {
  return (
    <Fragment>
      <Header />
      <AnimesCatalog />
    </Fragment>
  );
};

export default Animes;
