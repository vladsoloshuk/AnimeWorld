import { Link } from "react-router-dom";

const Information = ({ element, title }) => {
  return (
    <div className="block">
      <div className="b-entry-info">
        <div className="line-container">
          <div className="line">
            <div className="key">Type: </div>
            <div className="value">{element.kind}</div>
          </div>
        </div>
        {title === "Anime" ? (
          <div className="line-container">
            <div className="line">
              <div className="key">Episodes: </div>
              <div className="value">{element.ongoing ? element.episodes_aired + "/" + element.episodes : element.episodes}</div>
            </div>
          </div>
        ) : (
          ""
        )}
        {title === "Anime" ? (
          <div className="line-container">
            <div className="line">
              <div className="key">Episode duration: </div>
              <div className="value">{element.duration} min</div>
            </div>
          </div>
        ) : (
          ""
        )}
        {title === "Manga" || title === "Ranobe" ? (
          <div className="line-container">
            <div className="line">
              <div className="key">Volumes: </div>
              <div className="value">{element.volumes}</div>
            </div>
          </div>
        ) : (
          ""
        )}
        {title === "Manga" || title === "Ranobe" ? (
          <div className="line-container">
            <div className="line">
              <div className="key">Chapters: </div>
              <div className="value">{element.chapters}</div>
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="line-container">
          <div className="line">
            <div className="key">Status: </div>
            <div className="value">
              <span
                className={`b-anime_status_tag ${element.status}`}
                data-text={element.status}
              ></span>
              {element.aired_on}
            </div>
          </div>
        </div>
        <div className="line-container">
          <div className="line">
            <div className="key">Genres: </div>
            <span
              className="b-anime_status_tag"
              data-text="вышло"
            ></span>
            <div className="value">
              {element.genres.map((genre) => (
                <Link
                  key={genre.id}
                  className="b-tag bubbled-processed"
                  to={""}
                >
                  <span className="genre-en">{genre.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
