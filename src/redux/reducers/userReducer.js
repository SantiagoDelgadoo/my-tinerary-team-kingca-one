import { createReducer } from "@reduxjs/toolkit";
import userActions from "../actions/userActions";

const { login, reIngress, getUser, editUser, Logout } = userActions;

const initialState = {
  id: "",
  name: "",
  LastName: "",
  photo: "",
  age: "",
  email: "",
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



  builder.addCase(Logout.fulfilled, (state, action) => {
    const { success } = action.payload;
    if (success) {
      localStorage.removeItem('token');
      let newState = {...state,
        id: "",
        name: "",
        photo: "",
        logged: false,
        token: "",
        role: "",
      } 
      console.log("soy un console log");
      return newState
    } else {
      let newState = {
        ...state,
      };
      return newState;
    }
  });

  builder.addCase(reIngress.fulfilled, (state, action) => {
    const { response } = action.payload;

    if (action.payload.success) {
      let { user, token } = response;
      let newState = {
        ...state,
        id: user.user.id,
        name: user.user.name,
        photo: user.user.photo,
        logged: true,
        token: token,
        role: user.user.role,
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
  builder.addCase(getUser.fulfilled, (state, action) => {
    const { response } = action.payload;
    console.log(response);
    if (response.success) {
      let { data } = response;
      console.log(data);
      let newState = {
        ...state,
        id: data._id,
        name: data.name,
        email: data.email,
        age: data.age,
        lname: data.lastName,
        photo: data.photo,
        logged: true,
        role: data.role,
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
  builder.addCase(editUser.fulfilled, (state, action) => {
    const { editUser } = action.payload;
    let data = editUser;
    console.log(data);
    let newState = {
      ...state,
      id: data._id,
      name: data.name,
      email: data.email,
      age: data.age,
      lname: data.lastName,
      photo: data.photo,
      logged: true,
      role: data.role,
    };
    return newState;
  });
});

export default userReducer;
