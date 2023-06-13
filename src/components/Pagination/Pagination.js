import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { changePage } from "../../store/reducers/FilterSlice";

const Pagination = () => {
  const dispatch = useAppDispatch();
  const pageNumber = useAppSelector((state) => state.filter.page);

  return (
    <div className="pagination">
      <Link
        className={`link link-prev${pageNumber < 2 ? " disabled" : ""}`}
        data-field="backward"
        onClick={(event) => dispatch(changePage(event.target.getAttribute("data-field")))}
      >
        Back
      </Link>
      <div className="no-hover">
        <span className="link-title">{pageNumber > 1 ? "Pages" : "Page"}</span>
        <span className="link-current">{pageNumber > 1 ? `1-${pageNumber}` : pageNumber}</span>
      </div>
      <Link
        className="link link-next"
        data-field="forward"
        onClick={(event) => dispatch(changePage(event.target.getAttribute("data-field")))}
      >
        Forward
      </Link>
    </div>
  );
};

export default Pagination;
