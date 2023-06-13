import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Fragment } from "react";
import { Outlet } from "react-router";
import Backdrop from "../components/UI/Backdrop/Backdrop";

const Root = () => {
  return (
    <Fragment>
      <Header />
      <Outlet />
      <Backdrop />
      <Footer />
    </Fragment>
  );
};

export default Root;
