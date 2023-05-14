import EmptyCatalogItem from "./EmptyCatalogItem";
import classes from "./../AnimesCatalog/AnimesCatalog.module.scss";
import { UrlParts, hostUrl } from "../../../const/urlConsts";

const EmptyCatalog = ({elements}) => {

  return (
    <section className={classes.catalog_items}>
      {elements.map((element) => (
        <EmptyCatalogItem
          key={element.id}
          title={element.name}
          preview={element.image.preview}
          year={element.aired_on.split("-")[0]}
          kind={element.kind}
          url={hostUrl + UrlParts.API + element.url}
        />
      ))}
    </section>
  );
};

export default EmptyCatalog;
