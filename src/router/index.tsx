import Animes from "../pages/Animes/Animes";
import Mangas from "../pages/Mangas/Mangas";
import Root from "../pages/Root/Root";

export enum RoutesNames {
  HOME = "/",
  ANIMES = "/animes",
  MANGAS = "/mangas"
}

export const publicRoutes = [
  {
    path: RoutesNames.HOME,
    element: <Animes />,
    children: [
      {
        path: RoutesNames.ANIMES,
        element: <Animes />
      },
      {
        path: RoutesNames.MANGAS,
        element: <Animes />
      }
    ]
  }
];
