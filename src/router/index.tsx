import { RouteObject } from "react-router-dom";
import { lazy, Suspense } from "react";
import Spinner from "../components/UI/Spinner/Spinner";

const Root = lazy(() => import("../pages/Root"));
const Animes = lazy(() => import("../pages/Animes"));
const Mangas = lazy(() => import("../pages/Mangas"));
const ErrorPage = lazy(() => import("../pages/ErrorPage"));

export enum RouteNames {
  HOME = "/",
  ANIMES = "/animes",
  MANGAS = "/mangas"
}

export const publicRoutes: RouteObject[] = [
  {
    path: RouteNames.HOME,
    element: (
      <Suspense fallback={<Spinner />}>
        <Root />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
    children: []
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
  }
];
