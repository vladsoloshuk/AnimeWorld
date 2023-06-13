//Anime
export const animeFilters = [
  {
    name: "order",
    type: "radio",
    params: [
      { title: "By rank", value: "ranked" },
      { title: "By popularity", value: "popularity" },
      { title: "In alphabetical order", value: "name" },
      { title: "By release date", value: "aired_on" },
      { title: "Random", value: "random" },
      { title: "By ID", value: "id" }
    ]
  },
  {
    name: "status",
    type: "checkbox",
    params: [
      { title: "Announced", value: "anons" },
      { title: "Ongoing", value: "ongoing" },
      { title: "Released", value: "released" },
      { title: "Latest", value: "latest" }
    ]
  },
  {
    name: "kind",
    type: "checkbox",
    params: [
      { title: "TV Series", value: "tv" },
      { title: "Short", value: "tv_13", sub: true },
      { title: "Medium", value: "tv_24", sub: true },
      { title: "Long", value: "tv_48", sub: true },
      { title: "Movie", value: "movie" },
      { title: "Ova", value: "ova" },
      { title: "Ona", value: "ona" },
      { title: "Special", value: "special" },
      { title: "Music", value: "music" }
    ]
  },
  {
    name: "season",
    type: "checkbox",
    params: [
      { title: "2023", value: "2023" },
      { title: "2022", value: "2022" },
      { title: "2020-2021", value: "2020_2021" },
      { title: "2015-2019", value: "2015_2019" },
      { title: "2010-2014", value: "2010_2014" },
      { title: "2000-2010", value: "2000_2010" },
      { title: "199x", value: "199x" },
      { title: "198x", value: "198x" },
      { title: "Older", value: "ancient" }
    ]
  },
  {
    name: "score",
    type: "checkbox",
    params: [
      { title: "8+", value: "8" },
      { title: "7+", value: "7" },
      { title: "6+", value: "6" }
    ]
  }
];

export const animeRecomendaions = {
  title: "recomendations",
  list: [
    { title: "Favorites", link: "" },
    { title: "From the community", link: "" },
    { title: "Personalized", link: "" }
  ]
};

//Manga
export const mangaFilters = [
  {
    name: "order",
    type: "radio",
    params: [
      { title: "By rank", value: "ranked" },
      { title: "By popularity", value: "popularity" },
      { title: "In alphabetical order", value: "name" },
      { title: "By release date", value: "aired_on" },
      { title: "Random", value: "random" },
      { title: "By ID", value: "id" }
    ]
  },
  {
    name: "status",
    type: "checkbox",
    params: [
      { title: "Announced", value: "anons" },
      { title: "Ongoing", value: "ongoing" },
      { title: "Released", value: "released" },
      { title: "Latest", value: "latest" }
    ]
  },
  {
    name: "kind",
    type: "checkbox",
    params: [
      { title: "Manga", value: "manga" },
      { title: "Manhwa", value: "manhwa" },
      { title: "Manhua", value: "manhua" },
      { title: "Light novel", value: "light_novel" },
      { title: "Novel", value: "novel" },
      { title: "One shot", value: "one_shot" },
      { title: "Doujin", value: "doujin" }
    ]
  },
  {
    name: "season",
    type: "checkbox",
    params: [
      { title: "2023", value: "2023" },
      { title: "2022", value: "2022" },
      { title: "2020-2021", value: "2020_2021" },
      { title: "2015-2019", value: "2015_2019" },
      { title: "2010-2014", value: "2010_2014" },
      { title: "2000-2010", value: "2000_2010" },
      { title: "199x", value: "199x" },
      { title: "198x", value: "198x" },
      { title: "Older", value: "ancient" }
    ]
  },
  {
    name: "score",
    type: "checkbox",
    params: [
      { title: "8+", value: "8" },
      { title: "7+", value: "7" },
      { title: "6+", value: "6" }
    ]
  }
];

export const mangaRecomendaions = {
  title: "recomendations",
  list: [
    { title: "Favorites", link: "" },
    { title: "Personalized", link: "" }
  ]
};

//Ranobe

export const ranobeFilters = [
  {
    name: "order",
    type: "radio",
    params: [
      { title: "By rank", value: "ranked" },
      { title: "By popularity", value: "popularity" },
      { title: "In alphabetical order", value: "name" },
      { title: "By release date", value: "aired_on" },
      { title: "Random", value: "random" },
      { title: "By ID", value: "id" }
    ]
  },
  {
    name: "status",
    type: "checkbox",
    params: [
      { title: "Announced", value: "anons" },
      { title: "Ongoing", value: "ongoing" },
      { title: "Released", value: "released" },
      { title: "Paused", value: "paused" },
      { title: "Discontinued", value: "discontinued" }
    ]
  },
  {
    name: "kind",
    type: "checkbox",
    params: [
      { title: "Light novel", value: "light_novel" },
      { title: "Novel", value: "novel" }
    ]
  },
  {
    name: "season",
    type: "checkbox",
    params: [
      { title: "2023", value: "2023" },
      { title: "2022", value: "2022" },
      { title: "2020-2021", value: "2020_2021" },
      { title: "2015-2019", value: "2015_2019" },
      { title: "2010-2014", value: "2010_2014" },
      { title: "2000-2010", value: "2000_2010" },
      { title: "199x", value: "199x" },
      { title: "198x", value: "198x" },
      { title: "Older", value: "ancient" }
    ]
  },
  {
    name: "score",
    type: "checkbox",
    params: [
      { title: "8+", value: "8" },
      { title: "7+", value: "7" },
      { title: "6+", value: "6" }
    ]
  }
];

export const ranobeRecomendaions = {
  title: "recomendations",
  list: [{ title: "Favorites", link: "" }]
};
