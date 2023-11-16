import { useEffect } from "react";
import { useAppDispatch } from "../hooks/redux";
import { elementVisibility, updateTitle } from "../store/reducers/PageParams";
import OngoingSection from "../components/Sections/OngoingSection";
import NewsSection from "../components/Sections/NewsSection";
import ContentSection from "../components/Sections/ContentSection";
import AnimeUpdatesSection from "../components/Sections/AnimeUpdatesSection";
import NewsCatalog from "../components/Sections/NewsCatalog";

const Home = (props) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(updateTitle("Home"));
    dispatch(elementVisibility(["search", false]));
  });
  return (
    <section className="p-dashboards p-dashboards-show x1200 l-page">
      <OngoingSection />
      <NewsSection />
      <ContentSection />
      <AnimeUpdatesSection />
      <NewsCatalog />
    </section>
  );
};

export default Home;
