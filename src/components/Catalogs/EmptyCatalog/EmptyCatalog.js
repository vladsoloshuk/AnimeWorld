import Pagination from "../../Pagination/Pagination";
import EmptyCatalogContent from "../EmptyCatalog/EmptyCatalogContent";
import Filter from "../../Filter/Filter";
import MenuToggler from "../../UI/MenuToggler/MenuToggler";
import CatalogDescription from "./CatalogTooltip/CatalogDescription";

import { useState } from "react";

const EmptyCatalog = ({ recomendations, filterUI, url }) => {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);

  //toggle filter menu for small devices
  const menuToggleHandler = () => {
    setIsMenuExpanded(!isMenuExpanded);
  };

  return (
    <section className={`p-elements_collection-index x1200 l-page${isMenuExpanded ? " menu-expanded" : ""}`}>
        <MenuToggler menuToggleHandler={menuToggleHandler} />
        <CatalogDescription />
        <Pagination />
        <div className="menu-slide-outer x199">
          <div className="menu-slide-inner">
            <EmptyCatalogContent url={url} />
            <Filter
              recomendations={recomendations}
              filterUI={filterUI}
            />
          </div>
        </div>
    </section>
  );
};

export default EmptyCatalog;
