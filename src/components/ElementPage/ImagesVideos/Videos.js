import { Link } from "react-router-dom";
import Preview from "../../Preview/Preview";

const Videos = ({ element }) => {
  return (
    <div className="c-videos">
      <div className="subheadline">
        <Link to={""}>Videos</Link>
      </div>
      <div className="cc">
        {element.videos.map((element) => (
          <div
            key={element.id}
            className={`c-video b-video shrinked-1_3 ${element.hosting}`}
          >
            <Link
              className="video-link"
              to={element.player_url}
            >
              <Preview
                element={element}
                imageType={element.image_url}
              />
            </Link>
            <span
              className="name"
              title={element.name}
            >
              {element.name}
            </span>
            <span className="marker">{element.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;
