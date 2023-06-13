import { lazy, Suspense } from "react";
import Spinner from "../components/UI/Spinner/Spinner";

import { RouteNames } from "../const/routeNames";

const Root = lazy(() => import("../pages/Root"));
const Home = lazy(() => import("../pages/Home"));
const Animes = lazy(() => import("./../pages/Animes"));
const Mangas = lazy(() => import("../pages/Mangas"));
const Ranobe = lazy(() => import("../pages/Ranobe"));
const ErrorPage = lazy(() => import("../pages/ErrorPage"));

export const publicRoutes = [
  {
    path: RouteNames.HOME,
    element: (
      <Suspense fallback={<Spinner />}>
        <Root />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: RouteNames.HOME,
        element: (
          <Suspense fallback={<Spinner />}>
            <Home />
          </Suspense>
        ),
        errorElement: <ErrorPage />
      },
      {
        path: RouteNames.ANIMES,
        element: (
          <Suspense fallback={<Spinner />}>
            <Animes />
          </Suspense>
        ),
        errorElement: <ErrorPage />
      },
      {
        path: RouteNames.MANGAS,
        element: (
          <Suspense fallback={<Spinner />}>
            <Mangas />
          </Suspense>
        ),
        errorElement: <ErrorPage />
      },
      {
        path: RouteNames.RANOBE,
        element: (
          <Suspense fallback={<Spinner />}>
            <Ranobe />
          </Suspense>
        ),
        errorElement: <ErrorPage />
      }
    ]
  }
];
