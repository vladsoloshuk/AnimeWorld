import { UrlParts } from "./urlConsts";

export const animeTags = [
  { id: 1, name: "Spring 2024", property: "season", value: "spring_2024", type: "anime", link: UrlParts.ANIMES },
  { id: 2, name: "Winter 2024", property: "season", value: "winter_2024", type: "anime", link: UrlParts.ANIMES },
  { id: 3, name: "2024", property: "season", value: "2024", type: "anime", link: UrlParts.ANIMES },
  { id: 4, name: "2023", property: "season", value: "2023", type: "anime", link: UrlParts.ANIMES },
  { id: 5, name: "Ongoing", property: "status", value: "ongoing", type: "anime", link: UrlParts.ANIMES },
  { id: 6, name: "Favorites", type: "anime", link: UrlParts.ANIMES },
  { id: 7, name: "Recommendations", type: "anime", link: UrlParts.ANIMES }
];

export const mangaTags = [
  { id: 1, name: "Manga", property: "kind", value: "manga", type: "manga", link: UrlParts.MANGAS },
  { id: 2, name: "Manhwa", property: "kind", value: "manhwa", type: "manga", link: UrlParts.MANGAS },
  { id: 3, name: "Manhua", property: "kind", value: "manhua", type: "manga", link: UrlParts.MANGAS },
  { id: 4, name: "One shot", property: "kind", value: "one_shot", type: "manga", link: UrlParts.MANGAS },
  { id: 5, name: "Doujin", property: "kind", value: "doujin", type: "manga", link: UrlParts.MANGAS },
  { id: 6, name: "Favorites", type: "manga", link: UrlParts.ANIMES },
  { id: 7, name: "Recommendations", type: "manga", link: UrlParts.ANIMES }
];

export const ranobeTags = [{ id: 1, name: "Favorites", type: "ranobe", link: UrlParts.RANOBE }];
