import { createSlice } from "@reduxjs/toolkit";
import AnimeServices from "../../api/AnimeService";

const initialState = {
  data: {},
  error: "",
  status: ""
};

export const fetchAnimes = async () => {
  const response = await AnimeServices.getAnimes();
  console.log(response.data);
  return response.data;
};

export const AnimesSlice = createSlice({
  name: "animes",
  initialState,
  reducers: {}
});

export default AnimesSlice.reducer;
