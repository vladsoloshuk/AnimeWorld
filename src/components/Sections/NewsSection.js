import { Link } from "react-router-dom";
import { api } from "../../services/Api";
import { UrlParts } from "../../const/urlConsts";
import { Suspense, useEffect, useState } from "react";
import Spinner from "../UI/Spinner/Spinner";
import { useAppDispatch } from "../../hooks/redux";
import { updateFilter } from "../../store/reducers/FilterSlice";
import { timeFromPublication } from "../../utils/dateCalculations";

const NewsSection = () => {
  const [elements, setElements] = useState([]);

  const dispatch = useAppDispatch();

  const queryParams = {
    forum: "news",
    limit: 2
  };
  const url = UrlParts.TOPICS;
  const { data, isFetching, isSuccess } = api.useGetElementsQuery({ url, queryParams });

  //rerendering if data has been changed
  useEffect(() => {
    if (isSuccess) {
      console.log(data[1].html_footer);
      setElements(data);
    }
  }, [data, isSuccess]);

  return (
    <Suspense fallback={Spinner}>
      <div className="block2">
        <div class="subheadline-buttons">
          <Link
            class="b-link_button dark mini create-topic"
            href=""
            title="Написать новость"
          >
            <span>Add news</span>
          </Link>
        </div>
        <div className="headline linkheadline orange">News</div>
        <div className="news_wall latest-news">
          {isSuccess ? (
            elements.map((element) => (
              <article
                key={element.id}
                className="b-news_wall-topic"
              >
                <Link
                  to={`${element.url}`}
                  title={element.topic_title}
                >
                  <div className="poster">
                    <div className="b-shiki_swiper">
                      {}
                      <img
                        className="b-image"
                        src={new DOMParser().parseFromString(element.html_footer, "text/html").getElementsByTagName("img")[0].src}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="status-line">
                    <div className="tags">
                      <div
                        className="b-anime_status_tag other"
                        data-text="anons"
                      ></div>
                      <div
                        className="b-anime_status_tag other"
                        data-text="aeni"
                      ></div>
                    </div>
                    <time>{timeFromPublication(element.created_at)}</time>
                    <div className="comments">{element.comments_count}</div>
                  </div>
                  <div className="title">{element.topic_title}</div>
                </Link>
              </article>
            ))
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    </Suspense>
  );
};

export default NewsSection;
