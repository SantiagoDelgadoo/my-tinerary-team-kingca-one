import { createReducer } from "@reduxjs/toolkit";
import hotelsAction from "../actions/hotelsAction";
const initialState = {
  listHotels: [],
  listFiltered: [],
};

const hotelsReducer = createReducer(initialState, (builder) => {
  builder.addCase(hotelsAction.filterHotels.fulfilled, (state, action) => {
    return { ...state, ...action.payload };
  });
});
export default hotelsReducer;
