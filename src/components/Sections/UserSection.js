import { Suspense } from "react";
import Spinner from "../UI/Spinner/Spinner";
import { Link } from "react-router-dom";
import { UrlParts } from "../../const/urlConsts";
import { animeTags, mangaTags, ranobeTags } from "../../const/tags";
import TagSection from "./UserSection/TagSection";

const UserSection = () => {
  return (
    <Suspense fallback={Spinner}>
      <div className="block2">
        <div className="fc-user-sections">
          <div className="f-user">
            {/* <div className="my-list">
              <div className="label">
                <span>My list</span>
                <div className="misc-links">
                  <Link to="/">Anime</Link>
                  <Link to="/">Manga</Link>
                  <Link to="/">history</Link>
                </div>
              </div>
              <Link
                className="b-user_rate-history"
                to="/"
                title="Vinland Saga"
              >
                <picture>
                  <source
                    srcSet=""
                    type="image/webp"
                  />
                  <img
                    alt="Vinland Saga"
                    src=""
                    srcSet=""
                  />
                </picture>
                <div className="content">
                  <div className="title">
                    <span className="name-en">Vinland Saga</span>
                  </div>
                  <div className="progress"></div>
                  <div className="status-counter">
                    <div className="status">Читаю</div>
                    <div className="counter"></div>
                  </div>
                  <div className="score-time">
                    <time dateTime="2023-11-10T11:24:18+03:00">7 дней назад</time>
                  </div>
                </div>
              </Link>
            </div> */}
            <div className="social">
              <p className="m5">Login via social media networks</p>
              <div>
                <Link
                  className="b-oauth_token b-tooltipped vkontakte"
                  data-direction="top"
                  data-method="post"
                  data-turbolinks="false"
                  to=""
                  original-title="Login via Вконтакте"
                ></Link>
                <Link
                  className="b-oauth_token b-tooltipped twitter"
                  data-direction="top"
                  to=""
                  original-title="Login via Twitter"
                ></Link>
                <Link
                  className="b-oauth_token b-tooltipped facebook"
                  data-direction="top"
                  to=""
                  original-title="Login via Facebook"
                ></Link>
              </div>
            </div>
            <div className="sign-in">
              <Link
                className="b-link_button dark"
                to=""
              >
                Login with password
              </Link>
            </div>
            <div className="links">
              <Link to="">Registration</Link>
              <Link to="">Password recovery</Link>
            </div>
          </div>
          <div className="f-tag-sections">
            <TagSection
              title={"Anime"}
              url={UrlParts.ANIMES}
              tags={animeTags}
              sectionColor={"green"}
            />
            <TagSection
              title={"Manga"}
              url={UrlParts.MANGAS}
              tags={mangaTags}
              sectionColor={"magenta"}
            />
            <TagSection
              title={"Ranobe"}
              url={UrlParts.RANOBE}
              tags={ranobeTags}
              sectionColor={"blue"}
            />
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default UserSection;
