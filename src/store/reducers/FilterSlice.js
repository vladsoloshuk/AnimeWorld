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
      state.page = 1;
      if (state.hasOwnProperty(action.payload.property)) {
        if (action.payload.property === "order") {
          state[action.payload.property] = action.payload.value;
        } else {
          state[action.payload.property] = multipleFilter(state[action.payload.property], action.payload.value);
        }
      } else {
        state[action.payload.property] = action.payload.value;
      }
      console.log(state);
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
    }
  }
});

export const { updateFilter, changePage, restoreFilter } = filterSlice.actions;

export default filterSlice.reducer;
