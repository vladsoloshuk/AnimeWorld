import { Link } from "react-router-dom";

const Production = ({ productionName, title, production }) => {
  return (
    <div className="block">
      <div className="subheadline">{productionName}</div>
      <div className="block">
        {production ? (
          production.image ? (
            <Link
              to={``}
              title={`${title} made by ${production.name} ${productionName}`}
            >
              <img
                className="studio-logo"
                src={`https://shikimori.one/${production.image}`}
                alt={`${title} made by ${production.name} ${productionName}`}
              ></img>
            </Link>
          ) : (
            <Link
              className="b-tag"
              to={``}
            >
              {production.name}
            </Link>
          )
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Production;
