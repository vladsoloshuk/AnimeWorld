import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";
import { UrlParts } from "../../const/urlConsts";

const initialState = {
  searchMenu: [
    { title: "Anime", mode: "Anime", active: true, url: UrlParts.ANIMES },
    { title: "Manga", mode: "Manga", active: false, url: UrlParts.MANGAS },
    { title: "Ranobe", mode: "Ranobe", active: false, url: UrlParts.RANOBE },
    { title: "Character", mode: "Character", active: false, url: UrlParts.CHARACTERS },
    { title: "Person", mode: "Person", active: false, url: UrlParts.PEOPLE }
  ],
  searchParams: { page: 1, limit: 15, search: "" },
  searchUrl: UrlParts.ANIMES,
  searchMode: "Current",
  searchElements: []
};

const searchSlice = createSlice({
  name: "search",
  initialState: initialState,
  reducers: {
    updateSearchMenu(state, action) {
      //changing Url
      switch (action.payload) {
        case "Anime":
          state.searchUrl = UrlParts.ANIMES;
          state.searchMode = "Anime";
          break;
        case "Ranobe":
          state.searchUrl = UrlParts.RANOBE;
          state.searchMode = "Ranobe";
          break;
        case "Manga":
          state.searchUrl = UrlParts.MANGAS;
          state.searchMode = "Manga";
          break;
        default:
          console.log("modeUrl =", state.searchUrl);
      }
      //changing searchMenu
      switch (action.payload) {
        case "Anime":
        case "Ranobe":
        case "Manga":
          if (_.find(state.searchMenu, { mode: "Current" })) {
            _.find(state.searchMenu, { mode: "Current" }).url = state.searchUrl;
          } else {
            state.searchMenu.unshift({ title: "Current page", mode: "Current", active: true, url: state.searchUrl });
          }
          _.forEach(state.searchMenu, function (object) {
            object.mode === "Current" ? _.set(object, "active", true) : _.set(object, "active", false);
          });
          break;
        default:
          state.searchMenu = initialState.searchMenu;
      }
    },
    changeSearchMode(state, action) {      
      state.searchUrl = _.find(state.searchMenu, { mode: action.payload }).url;
      _.forEach(state.searchMenu, function (object) {
        object.mode === action.payload ? _.set(object, "active", true) : _.set(object, "active", false);
      });
    },
    updateSearchParams(state, action) {
      state.searchParams.search = action.payload;
    },
    updateSearchArray(state, action) {
      state.searchElements = action.payload;
    }
  }
});

export const { updateSearchMenu, updateSearchParams, updateSearchArray, changeSearchMode } = searchSlice.actions;

export default searchSlice.reducer;
