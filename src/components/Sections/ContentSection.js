import { Suspense } from "react";
import Spinner from "../UI/Spinner/Spinner";

const ContentSection = () => {
  return (
    <Suspense fallback={Spinner}>
      <div className="block2">
        <div className="fc-2_3">
          <div className="f-column">
            <div className="headline skyblue">
              Content
              <div className="misc-links">
                <a href="https://shikimori.one/collections">Collections</a>
                <a href="https://shikimori.one/forum/critiques">Critiques</a>
                <a href="https://shikimori.one/articles">Articles</a>
              </div>
            </div>
            <div className="content-updates"></div>
          </div>
          <div className="f-column">
            <div className="headline">Topics of the day</div>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default ContentSection;
