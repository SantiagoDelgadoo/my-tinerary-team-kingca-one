import { createReducer } from "@reduxjs/toolkit";
import userActions from "../actions/userActions";
const { login, reIngress } = userActions;

const initialState = {
  id: "",
  name: "",
  photo: "",
  logged: false,
  role: "",
  token: "",
};

const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(login.fulfilled, (state, action) => {
    const { response } = action.payload;
    if (response.success) {
      let { user, token } = response.response;
      localStorage.setItem("token", JSON.stringify({ token: { user: token } }));
      let newState = {
        ...state,
        id: user.id,
        name: user.name,
        photo: user.photo,
        logged: true,
        token: token,
        role: user.role,
      };
      return newState;
    } else {
      let newState = {
        ...state,
        message: response,
      };
      return newState;
    }
  });
  builder.addCase(reIngress.fulfilled, (state, action) => {
    const { response } = action.payload;

    if (action.payload.success) {
      let { user, token } = response;
      console.log(user);
      let newState = {
        ...state,
        id: user.user.id,
        name: user.user.name,
        photo: user.user.photo,
        logged: true,
        token: token,
        role: user.user.role,
      };
      console.log(newState);
      return newState;
    } else {
      let newState = {
        ...state,
        message: response,
      };
      return newState;
    }
  });
});

export default userReducer;
