import { api } from "../../services/Api";
import { UrlParts } from "../../const/urlConsts";
import { useRef, useEffect, useState, Suspense } from "react";
import useObserver from "../../hooks/useObserver";
import Trigger from "../UI/Trigger/Trigger";
import { Link } from "react-router-dom";
import { timeFromPublication } from "../../utils/dateCalculations";
import Spinner from "../UI/Spinner/Spinner";

const NewsCatalog = () => {
  const [elements, setElements] = useState([]);
  const [page, setPage] = useState(2);
  const [isObserverLoading, setIsObserverLoading] = useState(false);

  const queryParams = {
    forum: "news",
    limit: 3,
    page: page
  };

  const url = UrlParts.TOPICS;
  const { data, isFetching, isSuccess } = api.useGetElementsQuery({ url, queryParams });

  //rerendering if data has been changed
  useEffect(() => {
    if (isSuccess && isObserverLoading) {
      const arr = [...data];
      arr.pop();
      setElements([...elements, ...arr]);
    }
    if (isSuccess && !isObserverLoading) {
      const arr = [...data];
      arr.pop();
      setElements([...arr]);
    }
    setIsObserverLoading(false);
  }, [data]);

  //observer setup
  const lastElement = useRef();
  const observerFunctions = () => {
    setPage(page + 1);
    setIsObserverLoading(true);
  };
  useObserver(lastElement, isFetching, () => observerFunctions());

  return (
    <Suspense fallback={Spinner}>
      <div className="block2">
        <div className="headline skyblue m15">More news</div>
        <div className="news_wall other-news">
          {isSuccess && elements.length > 0 ? (
            elements.map((element) => (
              <article
                key={element.id}
                className="b-news_wall-topic"
              >
                <Link
                  to={element.url}
                  title={element.topic_title}
                >
                  <div className="poster">
                    <div className="b-shiki_swiper">
                      <img
                        className="b-image"
                        src={new DOMParser().parseFromString(element.html_footer, "text/html").getElementsByTagName("img")[0].src}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="status-line">
                    {/* <div className="tags">
                      <div
                        className="b-anime_status_tag other"
                        data-text={element.linked.status}
                      ></div>
                      <div
                        className="b-anime_status_tag other"
                        data-text={element.linked.kind}
                      ></div>
                    </div> */}
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
        {isSuccess ? <Trigger target={lastElement}></Trigger> : ""}
      </div>
    </Suspense>
  );
};

export default NewsCatalog;
