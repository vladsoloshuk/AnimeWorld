import { useEffect } from "react";
import { useAppDispatch } from "../hooks/redux";
import { elementVisibility, updateTitle } from "../store/reducers/PageParams";
import OngoingSection from "../components/Sections/OngoingSection";

const Home = (props) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(updateTitle("Home"));
    dispatch(elementVisibility(["search", false]));
  });
  return (
    <section className="p-dashboards p-dashboards-show x1200 l-page">
      <OngoingSection />
    </section>
  );
};

export default Home;
