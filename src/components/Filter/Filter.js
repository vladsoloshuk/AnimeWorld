import "./../../styles/app.scss";
import FilterItem from "./FilterItem/FilterItem";
import { useAppSelector } from "../../hooks/redux";

const Filter = ({ recomendations, filterUI }) => {
  const filterParams = useAppSelector((state) => state.filter);

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
                filterParams={filterParams}
              />
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
};

export default Filter;
