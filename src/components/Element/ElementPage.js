import { Suspense, useEffect, useState } from "react";
import Spinner from "../UI/Spinner/Spinner";
import { useParams } from "react-router";
import { api } from "../../services/Api";
import { UrlParts } from "../../const/urlConsts";
import Preview from "../Preview/Preview";
import { Link } from "react-router-dom";
import "./../../styles/pages/p-animes.scss";
import ElementChart from "./ElementChart";

const ElementPage = () => {
  const [maxRatesScore, setMaxRatesScore] = useState(0);
  const [maxRatesStatuse, setMaxRatesStatuse] = useState(0);
  const { url } = useParams();
  const fetchUrl = UrlParts.ANIMES + "/" + url;
  const { data, isFetching, isSuccess } = api.useGetElementQuery(fetchUrl);
  const element = data;
  useEffect(() => {
    if (isSuccess) {
      const maxRatesScoreCalc = Math.max(
        ...element.rates_scores_stats.map((rate) => {
          return rate.value;
        })
      );
      const maxRatesStatuseCalc = Math.max(
        ...element.rates_statuses_stats.map((rate) => {
          return rate.value;
        })
      );
      setMaxRatesScore(maxRatesScoreCalc);
      setMaxRatesStatuse(maxRatesStatuseCalc);
    }
  }, [data]);
  console.log(data);

  return (
    <Suspense fallback={Spinner}>
      {isSuccess ? (
        <section className="p-animes p-animes-show p-db_entries p-db_entries-show p-elements_collection-index x1200 l-page">
          <div>
            <div className="head">
              <h1>{element.name}</h1>
            </div>
            <div className="menu-slide-outer x199">
              <div className="menu-slide-inner">
                <div className="l-content">
                  <div className="block">
                    <div className="b-db_entry">
                      <div className="c-image">
                        <div className="cc block">
                          <div className="c-poster">
                            <div className="b-db_entry-poster b-image">
                              <Preview
                                element={element}
                                imageType={element.image.original}
                              />
                            </div>
                          </div>
                          <div className="c-actions">
                            <div className="b-subposter-actions">
                              <Link
                                className="b-subposter-action new_comment b-tooltipped"
                                to={""}
                              ></Link>
                              <Link
                                className="b-subposter-action new_review b-tooltipped"
                                to={""}
                              ></Link>
                              <Link
                                className="b-subposter-action new_critique b-tooltipped"
                                to={""}
                              ></Link>
                              <Link
                                className="b-subposter-action fav-add b-tooltipped"
                                to={""}
                              ></Link>
                              <Link
                                className="b-subposter-action edit b-tooltipped"
                                to={""}
                              ></Link>
                            </div>
                          </div>
                        </div>
                        <div className="b-user_rate"></div>
                      </div>
                      <div className="c-about">
                        <div className="cc">
                          <div className="c-info-left">
                            <div className="subheadline">Information</div>
                            <div className="block">
                              <div className="b-entry-info">
                                <div className="line-container">
                                  <div className="line">
                                    <div className="key">Type: </div>
                                    <div className="value">{element.kind}</div>
                                  </div>
                                </div>
                                <div className="line-container">
                                  <div className="line">
                                    <div className="key">Episodes: </div>
                                    <div className="value">{element.ongoing ? element.episodes_aired + "/" + element.episodes : element.episodes}</div>
                                  </div>
                                </div>
                                <div className="line-container">
                                  <div className="line">
                                    <div className="key">Episode duration: </div>
                                    <div className="value">{element.duration} min</div>
                                  </div>
                                </div>
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
                          </div>
                          <div className="c-info-right">
                            <div className="block">
                              <div className="subheadline m5">Score</div>
                              <div className="scores">
                                <div className="b-rate">
                                  <div className="stars-container">
                                    <div className="hoverable-trigger"></div>
                                    <div className={`stars score score-${Math.round(element.score)}`}></div>
                                    <div className="stars hover"></div>
                                    <div className="stars background"></div>
                                  </div>
                                  <div className="text-score">
                                    <div className={`score-value score-${Math.round(element.score)}`}>{element.score}</div>
                                    <div className="score-notice">
                                      {element.score > 8
                                        ? "Excellent"
                                        : element.score > 6
                                        ? "Good"
                                        : element.score > 4
                                        ? "More or less"
                                        : element.score > 2
                                        ? "Bad"
                                        : ""}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="block">
                              <div className="subheadline">Studio</div>
                              <div className="block">
                                {element.studios[0].image ? (
                                  <Link
                                    to={``}
                                    title={`Anime made by ${element.studios[0].name} studio`}
                                  >
                                    <img
                                      className="studio-logo"
                                      src={`https://shikimori.one/${element.studios[0].image}`}
                                      alt={`Anime made by ${element.studios[0].name} studio`}
                                    ></img>
                                  </Link>
                                ) : (
                                  <Link
                                    className="b-tag"
                                    to={``}
                                  >
                                    {element.studios[0].name}
                                  </Link>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="c-description">
                        <div className="subheadline m5">Description</div>
                        <div
                          className="block"
                          dangerouslySetInnerHTML={{ __html: element.description_html }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <aside className="l-menu">
                  <div className="b-animes-menu">
                    <ElementChart
                      element={element}
                      property={"rates_scores_stats"}
                      maxValue={maxRatesScore}
                    />
                    <ElementChart
                      element={element}
                      property={"rates_statuses_stats"}
                      maxValue={maxRatesStatuse}
                    />
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div></div>
      )}
    </Suspense>
  );
};

export default ElementPage;
