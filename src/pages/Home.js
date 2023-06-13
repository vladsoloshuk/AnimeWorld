import { useEffect } from "react";
import { useAppDispatch } from "../hooks/redux";
import { updateTitle } from "../store/reducers/PageParams";

const Home = (props) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(updateTitle("Home"));
  });
  return (
    <section className="l-page">
      <div>Home page</div>
    </section>
  );
};

export default Home;
