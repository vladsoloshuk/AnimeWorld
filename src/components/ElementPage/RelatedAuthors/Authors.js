import { Suspense, useEffect } from "react";
import Spinner from "../../UI/Spinner/Spinner";
import { useLocation } from "react-router";
// import { useAppDispatch } from "../../../hooks/redux";
import { api } from "../../../services/Api";
import { UrlParts } from "../../../const/urlConsts";
import { Link } from "react-router-dom";

const Authors = () => {
  // const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  const { data, isSuccess } = api.useGetElementQuery(pathname + UrlParts.RELATED);

  useEffect(() => {
    if (isSuccess) {
      console.log(data);
    }
  }, [data, isSuccess]);

  return (
    <Suspense fallback={Spinner}>
      {isSuccess ? (
        <div className="c-column c-authors block_m">
          <div className="subheadline"><Link to={""}>Authors</Link></div>
        </div>
      ) : (
        ""
      )}
    </Suspense>
  );
};

export default Authors;
