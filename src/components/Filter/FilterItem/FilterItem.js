import "./../../../styles/app.scss";

const FilterItem = ({ sortType, param, filterParams, method }) => {
  return (
    <li
      data-field={sortType.name}
      data-value={param.value}
      onClick={(event) => method(event.target.getAttribute("data-field"), event.target.getAttribute("data-value"))}
      
      className={`${param.sub ? "sub" : ""}${filterParams[sortType.name].split(",").includes(param.value) ? " selected" : ""}`}
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
