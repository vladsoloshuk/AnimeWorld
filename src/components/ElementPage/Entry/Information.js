import { Link } from "react-router-dom";
import LineContainer from "./LineContainer";
import { Fragment } from "react";
import { getYearGap, transformDate } from "../../../utils/dateCalculations";
import { firstLetterUpperCase, kindTransform } from "../../../utils/textTransform";
import { UrlParts } from "../../../const/urlConsts";
import { restoreUpdateFilter } from "../../../store/reducers/FilterSlice";

const Information = ({ element, title }) => {
  let basicUrl = title === "Anime" ? UrlParts.ANIMES : title === "Manga" ? UrlParts.MANGAS : UrlParts.RANOBE;

  return (
    <div className="block">
      <div className="b-entry-info">
        <LineContainer
          title={"Type: "}
          value={kindTransform(element.kind)}
        />
        {title === "Anime" ? (
          <Fragment>
            <LineContainer
              title={"Episodes: "}
              value={element.ongoing ? element.episodes_aired + " / " + element.episodes : element.episodes}
            />
            {element.ongoing ? (
              <LineContainer
                title={"Next episode: "}
                value={transformDate(element.next_episode_at)}
              />
            ) : (
              ""
            )}
            <LineContainer
              title={"Episode duration: "}
              value={`${element.duration} min`}
            />
          </Fragment>
        ) : (
          ""
        )}
        {title === "Manga" || title === "Ranobe" ? (
          <Fragment>
            {element.status === "released" ? (
              <Fragment>
                <LineContainer
                  title={"Volumes: "}
                  value={`${element.volumes}`}
                />
                <LineContainer
                  title={"Chapters: "}
                  value={`${element.chapters}`}
                />
              </Fragment>
            ) : (
              ""
            )}
          </Fragment>
        ) : (
          ""
        )}
        <div className="line-container">
          <div className="line">
            <div className="key">Status: </div>
            <div className="value">
              <span
                className={`b-anime_status_tag ${element.status}`}
                data-text={firstLetterUpperCase(element.status)}
              ></span>
              {(element.status === "released") | (element.status === "paused") | (element.status === "discontinued")
                ? `in ${getYearGap(element.aired_on, element.released_on)}`
                : `from ${element.aired_on}`}
            </div>
          </div>
        </div>
        <LineContainer
          title={"Genres: "}
          value={element.genres.map((genre) => (
            <Link
              key={genre.id}
              className="b-tag bubbled-processed"
              to={`${basicUrl}`}
              onClick={restoreUpdateFilter(genre.kind, genre.name)}
            >
              <span className="genre-en">{genre.name}</span>
            </Link>
          ))}
        />
      </div>
    </div>
  );
};

export default Information;
