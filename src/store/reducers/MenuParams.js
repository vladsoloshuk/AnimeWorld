import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  backdrop: false,
  mainSubmenu: false,
  profileSubmenu: false,
  search: false,
  mobile: false,
};

const menuParamsSlice = createSlice({
  name: "menuParams",
  initialState: initialState,
  reducers: {
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

export const { updateVisibility, elementVisibility } = menuParamsSlice.actions;

export default menuParamsSlice.reducer;
