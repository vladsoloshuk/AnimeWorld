import { combineReducers } from "@reduxjs/toolkit";
import AnimesSlice from "./Animes";

const rootReducer = combineReducers({
  animes: AnimesSlice
});

export default rootReducer;
