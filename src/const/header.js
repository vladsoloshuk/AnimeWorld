import { UrlParts } from "./urlConsts";

export const menuDropdown = [
  {
    title: "Database",
    items: [
      { icon: "anime", title: "Anime", link: UrlParts.ANIMES },
      { icon: "manga", title: "Manga", link: UrlParts.MANGAS },
      { icon: "ranobe", title: "Ranobe", link: UrlParts.RANOBE }
    ]
  },
  {
    title: "Community",
    items: [
      { icon: "forum", title: "Forum", link: "" },
      { icon: "clubs", title: "Clubs", link: "" },
      { icon: "collections", title: "Collections", link: "" },
      { icon: "critiques", title: "Reviews", link: "" },
      { icon: "articles", title: "Articles", link: "" },
      { icon: "users", title: "Users", link: "" }
    ]
  },
  {
    title: "Other",
    items: [
      { icon: "contests", title: "Contests", link: "" },
      { icon: "calendar", title: "Calendar", link: "" }
    ]
  },
  {
    title: "Information",
    items: [
      { icon: "info", title: "About us", link: "" },
      { icon: "socials", title: "Social media", link: "" },
      { icon: "moderation", title: "Moderation", link: "" }
    ]
  }
];

export const profileDropdown = [
  {
    title: "Profile",
    items: [
      { icon: "anime_list", title: "Anime list", link: "" },
      { icon: "manga_list", title: "Manga list", link: "" },
      { icon: "mail", title: "Mail", link: "" },
      { icon: "achievements", title: "Achievements", link: "" },
      { icon: "clubs", title: "Clubs", link: "" },
      { icon: "settings", title: "Settings", link: "" }
    ]
  },
  {
    title: "Website",
    items: [
      { icon: "site_rules", title: "Site ruled", link: "" },
      { icon: "faq", title: "FAQ", link: "" },
      { icon: "sign_out", title: "Sign out", link: "" }
    ]
  }
];

export const headerParams = {
  title: "",
  icon: ""
};
