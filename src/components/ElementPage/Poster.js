import Preview from "../Preview/Preview";

const Poster = ({ element }) => {
  return (
    <div className="c-poster">
      <div className="b-db_entry-poster b-image">
        <Preview
          element={element}
          imageType={element.image.original}
        />
      </div>
    </div>
  );
};

export default Poster;
