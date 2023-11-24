import { Suspense, useEffect } from "react";
import Spinner from "../UI/Spinner/Spinner";
import { useLocation } from "react-router";
import { useAppDispatch } from "../../hooks/redux";
import { api } from "../../services/Api";

const Authors = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  const { data, isSuccess } = api.useGetElementQuery(pathname + "/related");

  useEffect(() => {
    if (isSuccess) {
      // console.log(data);
    }
  }, [data]);

  return (
    <Suspense fallback={Spinner}>
      {isSuccess ? (
        <div className="c-column c-authors block_m">
          <div className="subheadline">Authors</div>
        </div>
      ) : (
        ""
      )}
    </Suspense>
  );
};

export default Authors;
