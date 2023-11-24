import { Suspense, useEffect, useState } from "react";
import Spinner from "../UI/Spinner/Spinner";
import { useLocation } from "react-router";
import { api } from "../../services/Api";
import "./../../styles/pages/p-animes.scss";
import SimpleHorizontalBar from "../UI/Bars/SimpleHorizontalBar";
import Score from "./Score";
import { UrlParts } from "../../const/urlConsts";
import { useAppDispatch } from "../../hooks/redux";
import { updateTitle } from "../../store/reducers/PageParams";
import Production from "./Production";
import Description from "./Description";
import Information from "./Information";
import Poster from "./Poster";
import Subposter from "./Subposter";
import Related from "./Related";
import Authors from "./Authors";
import { Link } from "react-router-dom";
import Header from "./Header";

const ElementPage = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  const [maxRatesScore, setMaxRatesScore] = useState(0);
  const [maxRatesStatuse, setMaxRatesStatuse] = useState(0);
  const [productionType, setProductionType] = useState("");
  const [prosuctionProperty, setProsuctionProperty] = useState("");

  const { data, isSuccess } = api.useGetElementQuery(pathname);
  let title;
  RegExp(`${UrlParts.ANIMES}`).test(pathname) ? (title = "Anime") : RegExp(`${UrlParts.MANGAS}`).test(pathname) ? (title = "Manga") : (title = "Ranobe");
  const element = data;

  useEffect(() => {
    dispatch(updateTitle(title));
    if (isSuccess) {
      if (element.publishers !== undefined && element.publishers.length > 0) {
        setProductionType("Publisher");
        setProsuctionProperty(element.publishers[0]);
      }
      if (element.studios !== undefined && element.studios.length > 0) {
        setProductionType("Studio");
        setProsuctionProperty(element.studios[0]);
      }
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
            <Header
              element={element}
              title={title}
            />
            <div className="menu-slide-outer x199">
              <div className="menu-slide-inner">
                <div className="l-content">
                  <div className="block">
                    <div className="b-db_entry">
                      <div className="c-image">
                        <div className="cc block">
                          <Poster element={element} />
                          <Subposter />
                        </div>
                        <div className="b-user_rate"></div>
                      </div>
                      <div className="c-about">
                        <div className="cc">
                          <div className="c-info-left">
                            <div className="subheadline">Information</div>
                            <Information
                              element={element}
                              title={title}
                            />
                          </div>
                          <div className="c-info-right">
                            {element.score > 0 ? <Score scoreValue={element.score} /> : ""}
                            {(element.publishers !== undefined && element.publishers.length > 0) ||
                            (element.studios !== undefined && element.studios.length > 0) ? (
                              <Production
                                productionName={productionType}
                                title={title}
                                production={prosuctionProperty}
                              />
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      </div>
                      <Description descriptionValue={element.description_html} />
                    </div>
                    <div className="cc-related-authors">
                      <Related />
                      <Authors />
                    </div>
                  </div>
                </div>
                <aside className="l-menu">
                  <div className="b-animes-menu">
                    <div className="block">
                      <div className="subheadline">People's ratings</div>
                      <SimpleHorizontalBar
                        element={element}
                        property={"rates_scores_stats"}
                        maxValue={maxRatesScore}
                      />
                    </div>
                    <div className="block">
                      <div className="subheadline">On people's lists</div>
                      <SimpleHorizontalBar
                        element={element}
                        property={"rates_statuses_stats"}
                        maxValue={maxRatesStatuse}
                      />
                    </div>
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
