import { createReducer } from "@reduxjs/toolkit";
import commentAction from "../actions/commentAction";
const initialState = {
  listComment: [],
};

const commentReducer = createReducer(initialState, (builder) => {
  builder.addCase(commentAction.getComments.fulfilled, (state, action) => {
    console.log(action.payload);
    return { ...state, listComment:state.listComment.concat(action.payload.listComment)};
  });
  builder.addCase(commentAction.createComment.fulfilled, (state, action) => {
    return {
      ...state,listComment:state.listComment.concat(action.payload.listComment),
    };
  });
  builder.addCase(commentAction.deleteComment.fulfilled, (state, action) => {
    return {
      ...state,
      listComment: state.listComment.filter(
        (event) => event._id !== action.payload.listComment
      ),
    };
  });
  builder.addCase(commentAction.editComment.fulfilled, (state, action) => {
    return {
      ...state,
      listComment: state.listComment
        .filter((event) => event._id !== action.payload.listComment._id)
        .concat(action.payload.listComment),
    };
  });

});
export default commentReducer;
