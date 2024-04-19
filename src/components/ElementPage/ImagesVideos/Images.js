import { Link } from "react-router-dom";
import Preview from "../../Preview/Preview";

const Images = ({ element }) => {
  return (
    <div className="c-screenshots">
      <div className="subheadline">
        <Link to={""}>Images</Link>
      </div>
      <div className="cc">
        {element.screenshots.map((element) => (
          <Link
            key={element.preview}
            className="c-screenshot b-image"
            to={``}
          >
            <Preview
              element={element}
              imageType={element.preview}
            />
            <span className="marker"></span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Images;
