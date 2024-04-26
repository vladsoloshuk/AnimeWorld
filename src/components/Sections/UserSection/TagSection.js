import { Link } from "react-router-dom";
import TagLink from "./TagLink";
import { ranobeTags } from "../../../const/tags";

const TagSection = ({ title, url, tags, sectionColor }) => {
  return (
    <div className="f-sections">
      <div className="fc-headlines">
        <div className={`f-headline midheadline ${sectionColor} linkheadline`}>
          <Link to={url}>{title}</Link>
        </div>
      </div>
      <div className="fc-tags">
        <div className={`f-tags ${tags[0].type}-tags`}>
          <div className="tags">
            {tags.map((element) => (
              <TagLink
                key={element.id}
                element={element}
              ></TagLink>
            ))}
          </div>
          {tags === ranobeTags ? (
            <div className="forum-container">
              <Link
                className="b-link_button dark mini arrow-right"
                to="/forum"
                title="Forum"
              >
                Forum
              </Link>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default TagSection;
