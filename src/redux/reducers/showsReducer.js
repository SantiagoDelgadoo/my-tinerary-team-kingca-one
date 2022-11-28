import { createReducer } from "@reduxjs/toolkit";
import showAction from "../actions/showAction";
const initialState = {
  showUser: [],
};

const showsReducer = createReducer(initialState, (builder) => {
  builder.addCase(showAction.getShowUser.fulfilled, (state, action) => {
    return { ...state, ...action.payload };
  });
  builder.addCase(showAction.deleteShowUser.fulfilled, (state, action) => {
    return {
      ...state,
      showUser: state.showUser.filter(
        (shows) => shows._id !== action.payload.deleteShow
      ),
    };
  });
  builder.addCase(showAction.editShowUser.fulfilled, (state, action) => {
    return {
      ...state,
      showUser: state.showUser
        .filter((shows) => shows._id !== action.payload.editShowUser._id)
        .concat(action.payload.editShowUser),
    };
  });
  builder.addCase(showAction.createShowUser.fulfilled, (state, action) => {
    return {
      ...state,
      showUser: state.showUser.concat(action.payload.createShow),
    };
  });
});
export default showsReducer;
