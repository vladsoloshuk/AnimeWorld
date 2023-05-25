import EmptyCatalogItem from "./EmptyCatalogItem";
import { UrlParts, hostUrl } from "../../../const/urlConsts";
import './../../../styles/app.scss';

const EmptyCatalog = ({elementsArr}) => {

  return (
    <section className="catalog-section">
      {elementsArr.map((element) => (
        <EmptyCatalogItem
          key={element.id}
          title={element.name}
          preview={element.image.preview}
          year={element.aired_on ? element.aired_on.split("-")[0] : ""}
          kind={element.kind}
          url={hostUrl + UrlParts.API + element.url}
        />
      ))}
    </section>
  );
};

export default EmptyCatalog;
