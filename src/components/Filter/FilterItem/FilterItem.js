import { useAppDispatch } from "../../../hooks/redux";
import "./../../../styles/app.scss";
import { updateFilter } from "../../../store/reducers/FilterSlice";

const FilterItem = ({ sortType, param, filterParams }) => {
  const dispatch = useAppDispatch();

  return (
    <li
      data-field={sortType.name}
      data-value={param.value}
      onClick={(event) => dispatch(updateFilter({ property: event.target.getAttribute("data-field"), value: event.target.getAttribute("data-value") }))}
      className={`${param.sub ? "sub" : ""}${filterParams[sortType.name] && filterParams[sortType.name].split(",").includes(param.value) ? " selected" : ""}`}
    >
      <input
        data-value={param.value}
        type={sortType.type}
        name={sortType.name}
      />
      {param.title}
    </li>
  );
};

export default FilterItem;
