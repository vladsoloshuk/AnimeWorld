import Description from "./Description";
import Information from "./Information";
import Poster from "./Poster";
import Production from "./Production";
import Score from "../Score";
import Subposter from "./Subposter";

const Entry = ({ element, title, productionType, prosuctionProperty }) => {
  return (
    <div className="b-db_entry">
      <div className="c-image">
        <div className="cc block">
          <Poster element={element} />
          <Subposter />
        </div>
        <div className="b-user_rate"></div>
      </div>
      <div className="c-about">
        <div className="cc">
          <div className="c-info-left">
            <div className="subheadline">Information</div>
            <Information
              element={element}
              title={title}
            />
          </div>
          <div className="c-info-right">
            {element.score > 0 ? <Score scoreValue={element.score} /> : ""}
            {(element.publishers !== undefined && element.publishers.length > 0) || (element.studios !== undefined && element.studios.length > 0) ? (
              <Production
                productionName={productionType}
                title={title}
                production={prosuctionProperty}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <Description descriptionValue={element.description_html || "No description"} />
    </div>
  );
};

export default Entry;
