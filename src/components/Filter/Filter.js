import { useEffect} from "react";
import { animeFilters, animeRecomendaions, mangaFilters, mangaRecomendaions, ranobeFilters, ranobeRecomendaions } from "../../const/filters";
import { useAppSelector } from "../../hooks/redux";
import "./../../styles/app.scss";
import FilterItem from "./FilterItem/FilterItem";

const Filter = () => {
  const title = useAppSelector((state) => state.pageParams).title;

  let filterUI = title === "Anime" ? animeFilters : title === "Manga" ? mangaFilters : ranobeFilters;
  let recomendations = title === "Anime" ? animeRecomendaions : title === "Manga" ? mangaRecomendaions : ranobeRecomendaions;

  const filterParams = useAppSelector((state) => state.filter);
  // console.log(filterParams);
  // const dispatch = useAppDispatch();
  const currentURL = window.location.href;

  function stringifyObjectFromThirdProperty(obj) {
    var result = "/";
    var count = 0;

    // Iterate through the object properties
    for (var key in obj) {
      // Exclude properties without values
      if (obj[key] !== undefined && obj[key] !== null && obj[key] !== "") {
        count++;
        // Start concatenating from the third property onwards
        if (count >= 3) {
          // Add '&' if not the first property added
          if (result !== "" && count > 3) {
            result += "&";
          }
          // Concatenate "property=value" to the result string
          result += key + "=" + obj[key];
        }
      }
    }

    return result;
  }

  function cutStringAfterFourthSlash(str) {
    // Find the index of the fourth "/"
    var fourthSlashIndex = -1;
    for (var i = 0, count = 0; i < str.length; i++) {
      if (str[i] === "/") {
        count++;
        if (count === 4) {
          fourthSlashIndex = i;
          break;
        }
      }
    }
    // If the fourth "/" exists, cut the string after it
    if (fourthSlashIndex !== -1) {
      return str.substring(0, fourthSlashIndex);
    }
    // If there is no fourth "/", return the original string
    return str;
  }

  function appendTextToURL(text) {
    let newURL = cutStringAfterFourthSlash(currentURL) + text;
    window.history.pushState({}, "", newURL);
  }

  useEffect(() => {
    appendTextToURL(stringifyObjectFromThirdProperty(filterParams));
  });

  return (
    <aside className="l-menu">
      <div className="block">
        <div className="subheadline">{recomendations.title}</div>
        <div className="b-list">
          {recomendations.list.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </div>
      </div>
      {filterUI.map((sortType) => (
        <div
          key={sortType.id}
          className="block"
        >
          <div className="subheadline">{sortType.title}</div>
          <ul className="b-block_list">
            {sortType.params.map((param) => (
              <FilterItem
                key={param.id}
                sortType={sortType}
                param={param}
              />
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
};

export default Filter;
