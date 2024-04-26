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
  { id: 1, name: "2024", value: "2024" },
  { id: 2, name: "2023", value: "2023" },
  { id: 3, name: "2022", value: "2022" },
  { id: 4, name: "2020-2021", value: "2020_2021" },
  { id: 5, name: "2015-2019", value: "2015_2019" },
  { id: 6, name: "2010-2014", value: "2010_2014" },
  { id: 7, name: "2000-2010", value: "2000_2010" },
  { id: 8, name: "199x", value: "199x" },
  { id: 9, name: "198x", value: "198x" },
  { id: 10, name: "Older", value: "ancient" }
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

const animeGenresParams = [
  {
    id: 8,
    name: "Drama",
    get value() {
      return `${this.id}-${this.name}`;
    }
  },
  {
    id: 11,
    name: "Game",
    russian: "Игры",
    get value() {
      return `${this.id}-${this.name}`;
    }
  },
  {
    id: 40,
    name: "Psychological",
    russian: "Психологическое",
    get value() {
      return `${this.id}-${this.name}`;
    }
  },
  {
    id: 19,
    name: "Music",
    russian: "Музыка",
    get value() {
      return `${this.id}-${this.name}`;
    }
  },
  {
    id: 1,
    name: "Action",
    russian: "Экшен",
    get value() {
      return `${this.id}-${this.name}`;
    }
  },
  {
    id: 4,
    name: "Comedy",
    russian: "Комедия",
    get value() {
      return `${this.id}-${this.name}`;
    }
  },
  {
    id: 6,
    name: "Demons",
    russian: "Демоны",
    get value() {
      return `${this.id}-${this.name}`;
    }
  },
  {
    id: 39,
    name: "Police",
    russian: "Полиция",
    get value() {
      return `${this.id}-${this.name}`;
    }
  },
  {
    id: 9,
    name: "Ecchi",
    russian: "Этти",
    get value() {
      return `${this.id}-${this.name}`;
    }
  },
  {
    id: 10,
    name: "Fantasy",
    russian: "Фэнтези",
    get value() {
      return `${this.id}-${this.name}`;
    }
  },
  {
    id: 12,
    name: "Hentai",
    russian: "Хентай",
    get value() {
      return `${this.id}-${this.name}`;
    }
  },
  {
    id: 13,
    name: "Historical",
    russian: "Исторический",
    get value() {
      return `${this.id}-${this.name}`;
    }
  },
  {
    id: 16,
    name: "Magic",
    russian: "Магия",
    get value() {
      return `${this.id}-${this.name}`;
    }
  },
  {
    id: 18,
    name: "Mecha",
    russian: "Меха",
    get value() {
      return `${this.id}-${this.name}`;
    }
  },
  {
    id: 20,
    name: "Parody",
    russian: "Пародия",
    get value() {
      return `${this.id}-${this.name}`;
    }
  },
  {
    id: 21,
    name: "Samurai",
    russian: "Самураи",
    get value() {
      return `${this.id}-${this.name}`;
    }
  },
  {
    id: 22,
    name: "Romance",
    russian: "Романтика",
    get value() {
      return `${this.id}-${this.name}`;
    }
  },
  {
    id: 23,
    name: "School",
    russian: "Школа",
    get value() {
      return `${this.id}-${this.name}`;
    }
  },
  {
    id: 27,
    name: "Shounen",
    russian: "Сёнен",
    get value() {
      return `${this.id}-${this.name}`;
    }
  },
  {
    id: 32,
    name: "Vampire",
    russian: "Вампиры",
    get value() {
      return `${this.id}-${this.name}`;
    }
  },
  {
    id: 33,
    name: "Yaoi",
    russian: "Яой",
    get value() {
      return `${this.id}-${this.name}`;
    }
  },
  {
    id: 34,
    name: "Yuri",
    russian: "Юри",
    get value() {
      return `${this.id}-${this.name}`;
    }
  },
  {
    id: 35,
    name: "Harem",
    russian: "Гарем",
    get value() {
      return `${this.id}-${this.name}`;
    }
  },
  {
    id: 36,
    name: "Slice of Life",
    russian: "Повседневность",
    get value() {
      return `${this.id}-${this.name}`;
    }
  },
  {
    id: 26,
    name: "Shoujo Ai",
    russian: "Сёдзё-ай",
    get value() {
      return `${this.id}-${this.name}`;
    }
  },
  {
    id: 43,
    name: "Josei",
    russian: "Дзёсей",
    get value() {
      return `${this.id}-${this.name}`;
    }
  },
  {
    id: 37,
    name: "Supernatural",
    russian: "Сверхъестественное",
    get value() {
      return `${this.id}-${this.name}`;
    }
  },
  {
    id: 41,
    name: "Thriller",
    russian: "Триллер",
    get value() {
      return `${this.id}-${this.name}`;
    }
  },
  {
    id: 24,
    name: "Sci-Fi",
    russian: "Фантастика",
    get value() {
      return `${this.id}-${this.name}`;
    }
  },
  {
    id: 25,
    name: "Shoujo",
    russian: "Сёдзё",
    get value() {
      return `${this.id}-${this.name}`;
    }
  },
  {
    id: 31,
    name: "Super Power",
    russian: "Супер сила",
    get value() {
      return `${this.id}-${this.name}`;
    }
  },
  {
    id: 38,
    name: "Military",
    russian: "Военное",
    get value() {
      return `${this.id}-${this.name}`;
    }
  },
  {
    id: 7,
    name: "Mystery",
    russian: "Детектив",
    get value() {
      return `${this.id}-${this.name}`;
    }
  },
  {
    id: 15,
    name: "Kids",
    russian: "Детское",
    get value() {
      return `${this.id}-${this.name}`;
    }
  },
  {
    id: 3,
    name: "Cars",
    russian: "Машины",
    get value() {
      return `${this.id}-${this.name}`;
    }
  },
  {
    id: 17,
    name: "Martial Arts",
    russian: "Боевые искусства",
    get value() {
      return `${this.id}-${this.name}`;
    }
  },
  {
    id: 5,
    name: "Dementia",
    russian: "Безумие",
    get value() {
      return `${this.id}-${this.name}`;
    }
  },
  {
    id: 30,
    name: "Sports",
    russian: "Спорт",
    get value() {
      return `${this.id}-${this.name}`;
    }
  },
  {
    id: 42,
    name: "Seinen",
    russian: "Сэйнэн",
    get value() {
      return `${this.id}-${this.name}`;
    }
  },
  {
    id: 28,
    name: "Shounen Ai",
    russian: "Сёнен-ай",
    get value() {
      return `${this.id}-${this.name}`;
    }
  },
  {
    id: 543,
    name: "Gourmet",
    russian: "Гурман",
    get value() {
      return `${this.id}-${this.name}`;
    }
  },
  {
    id: 29,
    name: "Space",
    russian: "Космос",
    get value() {
      return `${this.id}-${this.name}`;
    }
  },
  {
    id: 541,
    name: "Work Life",
    russian: "Работа",
    get value() {
      return `${this.id}-${this.name}`;
    }
  },
  {
    id: 14,
    name: "Horror",
    russian: "Ужасы",
    get value() {
      return `${this.id}-${this.name}`;
    }
  },
  {
    id: 2,
    name: "Adventure",
    russian: "Приключения",
    get value() {
      return `${this.id}-${this.name}`;
    }
  },
  {
    id: 539,
    name: "Erotica",
    russian: "Эротика",
    get value() {
      return `${this.id}-${this.name}`;
    }
  }
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
      { id: 9, name: "TV Special", value: "tv_special" },
      { id: 10, name: "Music", value: "music" },
      { id: 11, name: "Promo clip", value: "pv" },
      { id: 12, name: "Advertising", value: "cm" }
    ]
  },
  { id: 4, title: "season", type: "checkbox", params: seasonParams },
  { id: 5, title: "score", type: "checkbox", params: scoreParams },
  { id: 6, title: "duration", type: "checkbox", params: durationParams },
  { id: 7, title: "rating", type: "checkbox", params: ratingParams },
  { id: 8, title: "genres", type: "checkbox", params: animeGenresParams }
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
      { id: 4, name: "One shot", value: "one_shot" },
      { id: 5, name: "Doujin", value: "doujin" }
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
