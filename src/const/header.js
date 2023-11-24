import { UrlParts } from "./urlConsts";

export const menuDropdown = [
  {
    title: "Database",
    items: [
      { icon: "anime", name: "Anime", link: UrlParts.ANIMES },
      { icon: "manga", name: "Manga", link: UrlParts.MANGAS },
      { icon: "ranobe", name: "Ranobe", link: UrlParts.RANOBE }
    ]
  },
  {
    title: "Community",
    items: [
      { icon: "forum", name: "Forum", link: "" },
      { icon: "clubs", name: "Clubs", link: "" },
      { icon: "collections", name: "Collections", link: "" },
      { icon: "critiques", name: "Reviews", link: "" },
      { icon: "articles", name: "Articles", link: "" },
      { icon: "users", name: "Users", link: "" }
    ]
  },
  {
    title: "Other",
    items: [
      { icon: "contests", name: "Contests", link: "" },
      { icon: "calendar", name: "Calendar", link: "" }
    ]
  },
  {
    title: "Information",
    items: [
      { icon: "info", name: "About us", link: "" },
      { icon: "socials", name: "Social media", link: "" },
      { icon: "moderation", name: "Moderation", link: "" }
    ]
  }
];

export const profileDropdown = [
  {
    title: "Profile",
    items: [
      { icon: "anime_list", name: "Anime list", link: "" },
      { icon: "manga_list", name: "Manga list", link: "" },
      { icon: "mail", name: "Mail", link: "" },
      { icon: "achievements", name: "Achievements", link: "" },
      { icon: "clubs", name: "Clubs", link: "" },
      { icon: "settings", name: "Settings", link: "" }
    ]
  },
  {
    title: "Website",
    items: [
      { icon: "site_rules", name: "Site ruled", link: "" },
      { icon: "faq", name: "FAQ", link: "" },
      { icon: "sign_out", name: "Sign out", link: "" }
    ]
  }
];

export const headerParams = {
  name: "",
  icon: ""
};
