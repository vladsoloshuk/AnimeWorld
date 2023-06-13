import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchMenu: [
    { title: "Current page", "data-mode": "home", active: "" },
    { title: "Anime", "data-mode": "anime", active: "" },
    { title: "Manga", "data-mode": "manga", active: "" },
    { title: "Ranobe", "data-mode": "ranobe", active: "" },
    { title: "Character", "data-mode": "character", active: "" },
    { title: "Person", "data-mode": "person", active: "" }
  ],
  searchParams: { page: 1, limit: 15, search: "" },
  searchUrl: ""
};

const searchSlice = createSlice({
  name: "search",
  initialState: initialState,
  reducers: {
    searchElements(state, action) {},
    updateSearchMenu(state, action) {
      state.searchParams.search = action.payload;
      console.log(state.searchParams);
    },
    updateSearchParams(state, action) {
      state.searchParams.search = action.payload;
    },
    updateSearchUrl(state, action) {
      state.searchUrl = action.payload;
    }
  }
});

export const { searchElements, updateSearchMenu, updateSearchParams, updateSearchUrl } = searchSlice.actions;

export default searchSlice.reducer;
