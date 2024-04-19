import { Link } from "react-router-dom";
import { getYear } from "../../utils/dateCalculations";
import { kindTransform } from "../../utils/textTransform";

const RelatedInformation = ({ element, relation }) => {
  return (
    <div className="info">
      <div className="name">
        <Link
          className="b-link bubbled-processed"
          to={element.url}
        >
          <span className="name-en">{element.name}</span>
        </Link>
      </div>
      <div className="line">
        <div className="value">
          <Link
            className="b-tag"
            to={``}
          >
            {kindTransform(element.kind)}
          </Link>
          <Link
            className="b-tag"
            to={``}
          >
            {getYear(element.aired_on)}
          </Link>
          <Link
            className="b-anime_status_tag other"
            to={``}
          >
            {relation}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RelatedInformation;
