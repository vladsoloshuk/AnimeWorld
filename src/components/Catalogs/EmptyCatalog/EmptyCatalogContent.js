import EmptyCatalogItem from "./EmptyCatalogItem";

const EmptyCatalogContent = ({ elementsArr }) => {
  return (
    <section className="l-content b-search-results">
      <div className="cc-entries">
        {elementsArr.map((element) => (
          <EmptyCatalogItem
            key={element.id}
            element={element}
          />
        ))}
      </div>
    </section>
  );
};

export default EmptyCatalogContent;
