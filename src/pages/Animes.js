import Header from "../components/Header/Header";
import AnimesCatalog from "../components/Catalogs/ElementsCatalog/AnimesCatalog";

// import MainSectionCard from "../components/UI/Cards/MainSectionCard";
import { Fragment} from "react";
import { headerParams } from "../const/header";

const Animes = () => {
  const headerObj = {...headerParams, "title" : "Anime", "icon": "anime"}
  return (
    <Fragment>
      <Header headerParams={headerObj}/>
      <AnimesCatalog />
    </Fragment>
  );
};

export default Animes;
