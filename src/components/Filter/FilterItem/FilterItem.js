import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import "./../../../styles/app.scss";
import { updateFilter } from "../../../store/reducers/FilterSlice";

const FilterItem = ({ sortType, param }) => {
  const dispatch = useAppDispatch();
  const filterParams = useAppSelector((state) => state.filter);

  return (
    <li
      data-field={sortType.title}
      data-value={param.value}
      onClick={(event) => {
        dispatch(updateFilter([event.target.getAttribute("data-field"), event.target.getAttribute("data-value")]));
      }}
      className={`${param.sub ? "sub" : ""}${filterParams[sortType.title] && filterParams[sortType.title].split(",").includes(param.value) ? " selected" : ""}`}
    >
      <input
        data-value={param.value}
        type={sortType.type}
        name={sortType.title}
      />
      {param.name}
    </li>
  );
};

export default FilterItem;
