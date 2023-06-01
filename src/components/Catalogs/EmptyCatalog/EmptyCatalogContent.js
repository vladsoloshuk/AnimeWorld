import EmptyCatalogItem from "./EmptyCatalogItem";
import { UrlParts, hostUrl } from "../../../const/urlConsts";
import "./../../../styles/pages/p-elements_collection-index.scss";

const EmptyCatalogContent = ({ elementsArr }) => {
  return (
    <section className="l-content b-search-results">
      <div className="cc-entries">
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
      </div>
    </section>
  );
};

export default EmptyCatalogContent;
