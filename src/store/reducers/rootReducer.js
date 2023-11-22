import { combineReducers } from "@reduxjs/toolkit";
import { api } from "../../services/Api";
import filter from "./FilterSlice";
import pageParams from "./PageParams";
import search from './SearchSlice'
import menuParams from "./MenuParams";

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  filter,
  pageParams,
  menuParams,
  search
});

export default rootReducer;
