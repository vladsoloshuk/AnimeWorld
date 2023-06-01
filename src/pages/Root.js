import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { headerParams } from "../const/header";
import { Fragment } from "react";

const Root = () => {
  const headerObj = { ...headerParams, title: "Home", icon: "home" };
  return (
    <Fragment>
      <Header headerParams={headerObj}/>
      <main>Lol</main>
      <Footer />
    </Fragment>
  );
};

export default Root;
