import { Link } from "react-router-dom";
import Preview from "../../Preview/Preview";

const SearchItem = ({ element }) => {
  return (
    <Link
      className="b-db_entry-variant-list_item"
      to={element.url}
      tabIndex="-1"
    >
      <div className="image">
        <Preview element={element} />
      </div>
      <div className="info">
        <div className="name">
          <span
            className="b-link"
            to={element.url}
          >
            {element.name}
            {element.russian ? <span className="b-separator inline"> / </span> : ""}
            {element.russian}
          </span>
        </div>
        <div className="line">
          <div className="key">Type:</div>
          <div className="value">
            <div className="b-tag">{element.kind}</div>
            <div className="b-tag">{element.aired_on ? element.aired_on.split("-")[0] : ""}</div>
          </div>
        </div>
        <div className="line">
          <div className="key">Score:</div>
          <div className="value">
            <div className="b-tag">
              <span>{element.score}</span>
            </div>
          </div>
          <div className="key">Status:</div>
          <div className="value">
            <div className="b-anime_status_tag">
              <span>{element.status}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SearchItem;
