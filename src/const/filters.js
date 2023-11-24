const orderParams = [
  { id: 1, name: "By rank", value: "ranked" },
  { id: 2, name: "By popularity", value: "popularity" },
  { id: 3, name: "In alphabetical order", value: "name" },
  { id: 4, name: "By release date", value: "aired_on" },
  { id: 5, name: "Random", value: "random" },
  { id: 6, name: "By ID", value: "id" }
];

const statusParams = [
  { id: 1, name: "Announced", value: "anons" },
  { id: 2, name: "Ongoing", value: "ongoing" },
  { id: 3, name: "Released", value: "released" },
  { id: 4, name: "Latest", value: "latest" }
];

const seasonParams = [
  { id: 1, name: "2023", value: "2023" },
  { id: 2, name: "2022", value: "2022" },
  { id: 3, name: "2020-2021", value: "2020_2021" },
  { id: 4, name: "2015-2019", value: "2015_2019" },
  { id: 5, name: "2010-2014", value: "2010_2014" },
  { id: 6, name: "2000-2010", value: "2000_2010" },
  { id: 7, name: "199x", value: "199x" },
  { id: 8, name: "198x", value: "198x" },
  { id: 9, name: "Older", value: "ancient" }
];

const scoreParams = [
  { id: 1, name: "8+", value: "8" },
  { id: 2, name: "7+", value: "7" },
  { id: 3, name: "6+", value: "6" }
];

const durationParams = [
  { id: 1, name: "Up to 10 minutes", value: "S" },
  { id: 2, name: "Up to 30 minutes", value: "D" },
  { id: 3, name: "More than 30 minutes", value: "F" }
];

const ratingParams = [
  { id: 1, name: "G", value: "g" },
  { id: 2, name: "PG", value: "pg" },
  { id: 3, name: "PG-13", value: "pg_13" },
  { id: 4, name: "R-17", value: "r" },
  { id: 5, name: "R+", value: "r_plus" },
  { id: 6, name: "Rx", value: "rx" }
];

//Anime
export const animeFilters = [
  { id: 1, title: "order", type: "radio", params: orderParams },
  { id: 2, title: "status", type: "checkbox", params: statusParams },
  {
    id: 3,
    title: "kind",
    type: "checkbox",
    params: [
      { id: 1, name: "TV Series", value: "tv" },
      { id: 2, name: "Short", value: "tv_13", sub: true },
      { id: 3, name: "Medium", value: "tv_24", sub: true },
      { id: 4, name: "Long", value: "tv_48", sub: true },
      { id: 5, name: "Movie", value: "movie" },
      { id: 6, name: "Ova", value: "ova" },
      { id: 7, name: "Ona", value: "ona" },
      { id: 8, name: "Special", value: "special" },
      { id: 9, name: "Music", value: "music" }
    ]
  },
  { id: 4, title: "season", type: "checkbox", params: seasonParams },
  { id: 5, title: "score", type: "checkbox", params: scoreParams },
  { id: 6, title: "duration", type: "checkbox", params: durationParams },
  { id: 7, title: "rating", type: "checkbox", params: ratingParams }
];

export const animeRecomendaions = {
  id: 1,
  title: "recomendations",
  list: [
    { id: 1, name: "Favorites", link: "" },
    { id: 2, name: "From the community", link: "" },
    { id: 3, name: "Personalized", link: "" }
  ]
};

//Manga
export const mangaFilters = [
  { id: 1, title: "order", type: "radio", params: orderParams },
  { id: 2, title: "status", type: "checkbox", params: statusParams },
  {
    id: 3,
    title: "kind",
    type: "checkbox",
    params: [
      { id: 1, name: "Manga", value: "manga" },
      { id: 2, name: "Manhwa", value: "manhwa" },
      { id: 3, name: "Manhua", value: "manhua" },
      { id: 4, name: "Light novel", value: "light_novel" },
      { id: 5, name: "Novel", value: "novel" },
      { id: 6, name: "One shot", value: "one_shot" },
      { id: 7, name: "Doujin", value: "doujin" }
    ]
  },
  { id: 4, title: "season", type: "checkbox", params: seasonParams },
  { id: 5, title: "score", type: "checkbox", params: scoreParams }
];

export const mangaRecomendaions = {
  id: 1,
  title: "recomendations",
  list: [
    { id: 1, name: "Favorites", link: "" },
    { id: 2, name: "Personalized", link: "" }
  ]
};

//Ranobe

export const ranobeFilters = [
  { id: 1, title: "order", type: "radio", params: orderParams },
  { id: 2, title: "status", type: "checkbox", params: statusParams },
  {
    id: 3,
    title: "kind",
    type: "checkbox",
    params: [
      { id: 1, name: "Light novel", value: "light_novel" },
      { id: 2, name: "Novel", value: "novel" }
    ]
  },
  { id: 4, title: "season", type: "checkbox", params: seasonParams },
  { id: 5, title: "score", type: "checkbox", params: scoreParams }
];

export const ranobeRecomendaions = { id: 1, title: "recomendations", list: [{ id: 1, name: "Favorites", link: "" }] };
