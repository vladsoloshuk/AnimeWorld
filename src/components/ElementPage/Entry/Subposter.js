import { Link } from "react-router-dom";

const Subposter = () => {
  return (
    <div className="c-actions">
      <div className="b-subposter-actions">
        <Link
          className="b-subposter-action new_comment b-tooltipped"
          to={""}
        ></Link>
        <Link
          className="b-subposter-action new_review b-tooltipped"
          to={""}
        ></Link>
        <Link
          className="b-subposter-action new_critique b-tooltipped"
          to={""}
        ></Link>
        <Link
          className="b-subposter-action fav-add b-tooltipped"
          to={""}
        ></Link>
        <Link
          className="b-subposter-action edit b-tooltipped"
          to={""}
        ></Link>
      </div>
    </div>
  );
};

export default Subposter;
