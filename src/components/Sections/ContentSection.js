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
              <div class="misc-links">
                <a href="https://shikimori.one/collections">коллекции</a>
                <a href="https://shikimori.one/forum/critiques">рецензии</a>
                <a href="https://shikimori.one/articles">статьи</a>
              </div>
            </div>
            <div className="content-updates"></div>
          </div>
          <div className="f-column"></div>
        </div>
      </div>
    </Suspense>
  );
};

export default ContentSection;
