import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/redux";
import { restoreFilter, updateFilter } from "../../../store/reducers/FilterSlice";
import { restoreCollectionFilter } from "../../../store/reducers/PageParams";

const TagLink = ({ element }) => {
  const dispatch = useAppDispatch();

  const tagClick = () => {
    dispatch(restoreFilter());
    dispatch(updateFilter([element.property, element.value]));
    dispatch(restoreCollectionFilter(["restoreCollectionFilter", false]));
  };

  return (
    <Link
      className={`tag-link ${element.type}-tag`}
      onClick={tagClick}
      to={element.link}
      title={element.name}
    >
      {element.name}
    </Link>
  );
};

export default TagLink;
