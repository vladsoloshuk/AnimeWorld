import { useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import { publicRoutes } from "./router";
import Spinner from "./components/UI/Spinner/Spinner";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const router = createBrowserRouter(publicRoutes);

  return (
    <div>{isLoading ? <Spinner/> : <RouterProvider router={router} />}</div>
  );
}

export default App;
