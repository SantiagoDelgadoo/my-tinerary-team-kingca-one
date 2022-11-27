import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { base_url } from "../../api/url";

const login = createAsyncThunk("login", async (data) => {
  try {
    let user = await axios.post(`${base_url}auth/signin`,data);
    console.log(user);
    return {
      success: true,
      response: user.data,
    };
  } catch (error) {
    console.log(error.message);
    return {
      success: false,
    };
  }
});

const userActions = {
  login,
};

export default userActions;