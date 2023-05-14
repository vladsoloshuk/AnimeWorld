import classes from "./../AnimesCatalog/AnimesCatalog.module.scss";
import { hostUrl } from "../../../const/urlConsts";

const EmptyCatalogItem = ({ title, preview, year, kind, url }) => {

  return (
    <article>
      <a
        className={classes.catalog_item}
        href={url}
      >
        <span>
          <picture>
            <source srcSet={hostUrl + preview} />
            <img
              className={classes.catalog_item_image}
              alt={title}
              src={hostUrl + preview}
            />
          </picture>
        </span>
        <span className={classes.catalog_item_title}>{title}</span>
        <span className={classes.catalog_item_description}>
          <span>{year}</span>
          <span>{kind}</span>
        </span>
      </a>
    </article>
  );
};

export default EmptyCatalogItem;
