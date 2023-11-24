import { lazy, Suspense } from "react";
import Spinner from "../components/UI/Spinner/Spinner";

import { RouteNames } from "../const/routeNames";
import { UrlParts } from "../const/urlConsts";

const Root = lazy(() => import("../pages/Root"));
const Home = lazy(() => import("../pages/Home"));
const ElementsCollection = lazy(() => import("../pages/ElementsCollection"));
const ErrorPage = lazy(() => import("../pages/ErrorPage"));
const ElementPage = lazy(() => import("../components/ElementPage/ElementPage"));

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
            <ElementsCollection />
          </Suspense>
        ),
        errorElement: <ErrorPage />,
        children: [
          {
            path: "*",
            element: (
              <Suspense fallback={<Spinner />}>
                <ElementsCollection />
              </Suspense>
            ),
            errorElement: <ErrorPage />
          }
        ]
      },
      {
        path: RouteNames.MANGAS,
        element: (
          <Suspense fallback={<Spinner />}>
            <ElementsCollection />
          </Suspense>
        ),
        errorElement: <ErrorPage />
      },
      {
        path: RouteNames.RANOBE,
        element: (
          <Suspense fallback={<Spinner />}>
            <ElementsCollection />
          </Suspense>
        ),
        errorElement: <ErrorPage />
      },
      {
        path: `${UrlParts.ANIMES}/:url`,
        element: (
          <Suspense fallback={<Spinner />}>
            <ElementPage />
          </Suspense>
        ),
        errorElement: <ErrorPage />
      },
      {
        path: `${UrlParts.MANGAS}/:url`,
        element: (
          <Suspense fallback={<Spinner />}>
            <ElementPage />
          </Suspense>
        ),
        errorElement: <ErrorPage />
      },
      {
        path: `${UrlParts.RANOBE}/:url`,
        element: (
          <Suspense fallback={<Spinner />}>
            <ElementPage />
          </Suspense>
        ),
        errorElement: <ErrorPage />
      },
      {
        path: "*",
        element: <ErrorPage />
      }
    ]
  }
];
