import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "Home",
  restoreCollectionFilter: true
};

const pageParamsSlice = createSlice({
  name: "pageParams",
  initialState: initialState,
  reducers: {
    updateTitle(state, action) {
      state.title = action.payload;
    },
    restoreCollectionFilter(state, action) {
      const [property, value] = action.payload;
      state[property] = value;
    }
  }
});

export const { updateTitle, restoreCollectionFilter } = pageParamsSlice.actions;

export default pageParamsSlice.reducer;
