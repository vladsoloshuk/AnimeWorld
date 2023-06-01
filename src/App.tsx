import { useState } from "react";
import "./styles/app.scss";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Spinner from "./components/UI/Spinner/Spinner";
import { publicRoutes } from "./router";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const router = createBrowserRouter(publicRoutes);

  return (
    <>{isLoading ? <Spinner/> : <RouterProvider router={router} />}</>
  );
}

export default App;
