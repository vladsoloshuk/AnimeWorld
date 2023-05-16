import EmptyCatalogItem from "./EmptyCatalogItem";
import { UrlParts, hostUrl } from "../../../const/urlConsts";
import './../../../styles/app.scss';

const EmptyCatalog = ({elements}) => {

  return (
    <section className="catalog-section">
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
