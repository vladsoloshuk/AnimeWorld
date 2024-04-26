import { Suspense, useEffect, useState } from "react";
import Spinner from "../../UI/Spinner/Spinner";
import { useLocation } from "react-router";
import { api } from "../../../services/Api";
import { UrlParts } from "../../../const/urlConsts";
import { Link } from "react-router-dom";
import Preview from "../../Preview/Preview";

const Authors = () => {
  const { pathname } = useLocation();
  const [elements, setElements] = useState([]);

  const { data, isSuccess } = api.useGetElementQuery(pathname + UrlParts.ROLES);

  useEffect(() => {
    if (isSuccess) {
      const fillteredData = data
        .filter((obj) => obj.character === null)
        .filter((obj) => obj.roles[0] === "Original Creator" || obj.roles[0] === "Director" || obj.roles[0] === "Chief Producer")
        .reverse();
      setElements(fillteredData);
      console.log(data);
    }
  }, [data, isSuccess]);

  return (
    <Suspense fallback={Spinner}>
      {isSuccess ? (
        <div className="c-column c-authors block_m">
          <div className="subheadline">
            <Link to={""}>Authors</Link>
          </div>
          <div className="cc">
            {isSuccess ? (
              elements.map((element) => (
                <div
                  key={element.person.id}
                  className="b-db_entry-variant-list_item"
                >
                  <Link
                    className="image bubbled-processed"
                    to={element.url}
                  >
                    <Preview
                      element={element.person}
                      imageType={element.person.image.x96}
                    />
                  </Link>
                  <div className="info">
                    <div className="name">
                      <Link to={""}>{element.person.name}</Link>
                    </div>
                    <div className="line multiline">
                      <div className="key">Role: </div>
                      <div className="value">
                        {element.roles.map((element) => (
                          <div
                            key={element}
                            className="b-tag"
                          >
                            {element}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <Spinner />
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </Suspense>
  );
};

export default Authors;
