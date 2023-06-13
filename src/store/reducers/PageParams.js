import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "Home",
  backdrop: false,
  mainMenu: false,
  profileMenu: false,
  searchMenu: false,
  mobile: false
};

const pageParamsSlice = createSlice({
  name: "pageParams",
  initialState: initialState,
  reducers: {
    updateTitle(state, action) {
      state.title = action.payload;
    },
    showBackdrop(state, action) {
      const { property, value } = action.payload;
      state[property] = value;
      console.log(state[property]);
    },
    elementVisibility(state, action) {
      const [property, value] = action.payload;
      state[property] = value;
    }
  }
});

export const { updateTitle, updateVisibility, elementVisibility } = pageParamsSlice.actions;

export default pageParamsSlice.reducer;
