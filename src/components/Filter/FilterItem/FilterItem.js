const FilterItem = ({sortType, param}) => {
  return (
    <li
      key={param.title}
      data-field={sortType.name}
      data-value={param.value}
      onClick={sortType.method}
      className={`${param.isClicked ? "selected" : ""}`}
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
