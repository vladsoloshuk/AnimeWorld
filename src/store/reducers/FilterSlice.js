import { createSlice } from "@reduxjs/toolkit";
import { multipleFilter } from "../../utils/filter";

const initialState = {
  page: 1,
  limit: 15,
  order: "ranked"
};

const filterSlice = createSlice({
  name: "filter",
  initialState: initialState,
  reducers: {
    updateFilter(state, action) {
      const [property, value] = action.payload;
      state.page = 1;
      if (state.hasOwnProperty(property)) {
        if ((property === "order") | (property === "search")) {
          state[property] = value;
        } else {
          state[property] = multipleFilter(state[property], value);
        }
      } else {
        state[property] = value;
      }
    },
    changePage(state, action) {
      switch (action.payload) {
        case "backward":
          state.page < 2 ? (state.page = 1) : state.page--;
          break;
        default:
          state.page++;
      }
    },
    restoreFilter(state) {
      return (state = initialState);
    },
    restoreUpdateFilter(action) {
      let state = initialState;
      updateFilter(state, action);
    }
  }
});

export const { updateFilter, changePage, restoreFilter, restoreUpdateFilter } = filterSlice.actions;

export default filterSlice.reducer;
