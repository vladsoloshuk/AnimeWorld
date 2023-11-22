import { Suspense } from "react";
import Spinner from "../UI/Spinner/Spinner";
import { Link } from "react-router-dom";
import Animes from "../../pages/ElementsCollection";
import Mangas from "../../pages/Mangas";
import Ranobe from "../../pages/Ranobe";
import { UrlParts } from "../../const/urlConsts";

const UserSection = () => {
  return (
    <Suspense fallback={Spinner}>
      <div className="block2">
        <div className="fc-user-sections">
          <div className="f-user">
            <div className="f-user">
              <div className="my-list">
                <div className="label">
                  <span>My list</span>
                  <div className="misc-links">
                    <Link to="/">Anime</Link>
                    <Link to="/">Manga</Link>
                    <Link to="/">история</Link>
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
              </div>
            </div>
          </div>
          <div className="f-sections">
            <div className="fc-headlines">
              <div className="f-headline midheadline red linkheadline">
                <Link to={UrlParts.ANIMES}>Anime</Link>
              </div>
              <div className="f-headline midheadline blue linkheadline">
                <Link to={UrlParts.MANGAS}>Manga</Link>
              </div>
              <div className="f-headline midheadline green linkheadline">
                <Link to={UrlParts.RANOBE}>Ranobe</Link>
              </div>
            </div>
            <div className="fc-tags">
              <div className="f-tags anime-tags">
                <div className="tags">
                  <Link
                    className="tag-link anime-tag"
                    to="/animes/season/winter_2024"
                  >
                    Winter 2024
                  </Link>
                  <Link
                    className="tag-link anime-tag"
                    to="/animes/season/fall_2023"
                  >
                    Autumn 2023
                  </Link>
                  <Link
                    className="tag-link anime-tag"
                    to="/animes/season/2023"
                  >
                    Anime 2023
                  </Link>
                  <Link
                    className="tag-link anime-tag"
                    to="/animes/season/2022"
                  >
                    Anime 2022
                  </Link>
                  <Link
                    className="tag-link anime-tag"
                    to="/animes/status/ongoing"
                  >
                    Ongoing
                  </Link>
                  <Link
                    className="tag-link anime-tag"
                    to="/kakie-anime-postmotret"
                  >
                    Favorites
                  </Link>
                  <Link
                    className="tag-link anime-tag"
                    to="/recommendations/anime"
                  >
                    Recommendations
                  </Link>
                </div>
              </div>
              <div className="f-tags manga-tags">
                <div className="tags">
                  <Link
                    className="tag-link manga-tag"
                    to="/mangas/kind/manga"
                  >
                    Manga
                  </Link>
                  <Link
                    className="tag-link manga-tag"
                    to="/mangas/kind/manhwa"
                  >
                    Manhwa
                  </Link>
                  <Link
                    className="tag-link manga-tag"
                    to="/mangas/kind/manhua"
                    title="Маньхуа"
                  >
                    Manhua
                  </Link>
                  <Link
                    className="tag-link manga-tag one_shot"
                    to="/mangas/kind/one_shot"
                    title="Ваншот"
                  >
                    One shot
                  </Link>
                  <Link
                    className="tag-link manga-tag doujin"
                    to="/mangas/kind/doujin"
                  >
                    Doujin
                  </Link>
                  <Link
                    className="tag-link manga-tag"
                    to="/kakuyu-mangu-pochitat"
                  >
                    Favorites
                  </Link>
                  <Link
                    className="tag-link manga-tag"
                    to="/recommendations/manga"
                  >
                    Recommendations
                  </Link>
                </div>
              </div>
              <div className="f-tags ranobe-tags">
                <div className="tags">
                  <Link
                    className="tag-link ranobe-tag"
                    to="/kakie-ranobe-pochitat"
                  >
                    Favorites
                  </Link>
                </div>
                <div className="forum-container">
                  <Link
                    className="b-link_button dark arrow-right"
                    to="/forum"
                  >
                    Forum
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default UserSection;
