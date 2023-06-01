import { Link } from "react-router-dom";

const Pagination = ({changePageHandler, filterParams}) => {
  return (
    <div className="pagination">
          <Link
            className={`link link-prev${filterParams.page < 2 ? " disabled" : ""}`}
            data-field="backward"
            onClick={(event) => changePageHandler(event.target.getAttribute("data-field"))}
          >
            Back
          </Link>
          <div className="no-hover">
            <span className="link-title">{filterParams.page > 1 ? "Pages" : "Page"}</span>
            <span className="link-current">{filterParams.page > 1 ? `1-${filterParams.page}` : filterParams.page}</span>
          </div>
          <Link
            className="link link-next"
            data-field="forward"
            onClick={(event) => changePageHandler(event.target.getAttribute("data-field"))}
          >
            Forward
          </Link>
        </div>
  );
}

export default Pagination;