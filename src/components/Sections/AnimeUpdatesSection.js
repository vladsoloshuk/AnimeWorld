import { Suspense, useEffect, useState } from "react";
import { api } from "../../services/Api";
import { Link } from "react-router-dom";
import Spinner from "../UI/Spinner/Spinner";
import { UrlParts } from "../../const/urlConsts";
import Preview from "../Preview/Preview";
import { timeFromPublication } from "../../utils/dateCalculations";
import _ from "lodash";
import { firstLetterUpperCase, kindTransform } from "../../utils/textTransform";

const AnimeUpdatesSection = () => {
  const [elements, setElements] = useState([]);

  const queryParams = {
    limit: 30
  };

  const url = UrlParts.TOPICS + UrlParts.UPDATES;
  const { data, isSuccess } = api.useGetElementsQuery({ url, queryParams });

  //rerendering if data has been changed
  useEffect(() => {
    if (isSuccess) {
      let animeUpdated = [];
      data.forEach((element) => {
        switch (element.linked.kind) {
          case "tv":
          case "movie":
          case "ova":
          case "ona":
          case "special":
          case "music":
            animeUpdated.push(element);
            break;
          default:
        }
      });
      setElements(_.uniqBy(animeUpdated, (element) => element.linked.id).slice(0, 8));
    }
  }, [data, isSuccess]);

  return (
    <Suspense fallback={Spinner}>
      <div className="block2">
        <div className="headline linkheadline magenta m15">
          <Link to="/">Anime Updates</Link>
        </div>
        <div className="db-updates">
          <div className="mobile-slider-prev bright" />
          <div className="mobile-slider-next bright" />
          <div className="inner">
            {isSuccess ? (
              elements.map((element) => (
                <Link
                  to={element.linked.url}
                  key={element.id}
                  className="db-update unprocessed bubbled-processed"
                >
                  <div className="poster">
                    <Preview
                      element={element}
                      imageType={element.linked.image.x48}
                    />
                  </div>
                  <div className="info">
                    <div className="name">{element.linked.name}</div>
                    <div className="status-time">
                      <div
                        className={`b-anime_status_tag ${element.linked.status}`}
                        data-text={firstLetterUpperCase(element.linked.status)}
                      ></div>
                      <time>{timeFromPublication(element.created_at)}</time>
                    </div>
                    <div className="tags">
                      <div className="b-anime_status_tag studio">{kindTransform(element.linked.kind)}</div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <Spinner />
            )}
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default AnimeUpdatesSection;
