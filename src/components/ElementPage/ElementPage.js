import { Suspense, useEffect, useState } from "react";
import Spinner from "../UI/Spinner/Spinner";
import { useLocation } from "react-router";
import { api } from "../../services/Api";
import "./../../styles/pages/p-animes.scss";
import SimpleHorizontalBar from "../UI/Bars/SimpleHorizontalBar";
import { UrlParts } from "../../const/urlConsts";
import { useAppDispatch } from "../../hooks/redux";
import { updateTitle } from "../../store/reducers/PageParams";
import Header from "./Header";
import Entry from "./Entry/Entry";
import Characters from "./Characters/Characters";
import Images from "./ImagesVideos/Images";
import Videos from "./ImagesVideos/Videos";
import RelatedAuthors from "./RelatedAuthors/RelatedAuthors";
import Similar from "./Similar";

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
      // console.log(data);
    }
  }, [data]);

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
                    <Entry
                      element={element}
                      title={title}
                      productionType={productionType}
                      prosuctionProperty={prosuctionProperty}
                    />
                    <RelatedAuthors />
                    <Characters />
                    {title === "Anime" ? (
                      <div className="cc m0 two-videos">
                        <Images element={element} />
                        <Videos element={element} />
                      </div>
                    ) : (
                      ""
                    )}
                    <Similar />
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
