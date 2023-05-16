import { Fragment, useState } from "react";
import "./styles/app.scss";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import { publicRoutes } from "./router";
import Spinner from "./components/UI/Spinner/Spinner";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const router = createBrowserRouter(publicRoutes);

  return (
    <Fragment>{isLoading ? <Spinner/> : <RouterProvider router={router} />}</Fragment>
  );
}

export default App;
