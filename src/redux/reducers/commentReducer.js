import { createReducer } from "@reduxjs/toolkit";
import commentAction from "../actions/commentAction";
const initialState = {
  listComment: [],
  update:false
};

const commentReducer = createReducer(initialState, (builder) => {
  builder.addCase(commentAction.getComments.fulfilled, (state, action) => {
    return { ...state, listComment:state.listComment.concat(action.payload.listComment)};
  });
  builder.addCase(commentAction.createComment.fulfilled, (state, action) => {
    return {
      ...state,update:!state.update,listComment:state.listComment.concat(action.payload.listComment),
    };
  });
  builder.addCase(commentAction.deleteComment.fulfilled, (state, action) => {
    return {
      ...state,update:!state.update,
      listComment: state.listComment.filter(
        (comment) => comment._id !== action.payload.deleteComments
      ),
    };
  });
  builder.addCase(commentAction.editComment.fulfilled, (state, action) => {
    return {
      ...state,update:!state.update,
      listComment: state.listComment
        .filter((event) => event._id !== action.payload.listComment._id)
        .concat(action.payload.listComment),
    };
  });

});
export default commentReducer;
