import { createReducer } from "@reduxjs/toolkit";
import hotelsAction from "../actions/hotelsAction";
const initialState = {
  hotelAdmin: [],
};

const hotelReducer = createReducer(initialState, (builder) => {
  builder.addCase(hotelsAction.getHotelAdmin.fulfilled, (state, action) => {
    return { ...state, ...action.payload };
  });
  builder.addCase(hotelsAction.deleteHotelAdmin.fulfilled, (state, action) => {
    return {
      ...state,
      hotelAdmin: state.hotelAdmin.filter(
        (hotel) => hotel._id !== action.payload.deleteHotel
      ),
    };
  });
  builder.addCase(hotelsAction.editHotelAdmin.fulfilled, (state, action) => {
    return {
      ...state,
      hotelAdmin: state.hotelAdmin
        .filter((hotel) => hotel._id !== action.payload.editHotelAdmin._id)
        .concat(action.payload.editHotelAdmin),
    };
  });
});
export default hotelReducer;
