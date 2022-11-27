import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { base_url } from "../../api/url";

const login = createAsyncThunk("login", async (data) => {
  try {
    let user = await axios.post(`${base_url}auth/signin`, data);
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
const reIngress = createAsyncThunk("reIngress", async (token) => {
  let url = `${base_url}auth/token`;
  let headers = { headers: { Authorization: `Bearer ${token}` } };
  try {
    let user = await axios.post(url, null, headers);
    return {
      success: true,
      response: {
        user: user.data.response,
        token,
      },
    };
  } catch (error) {
    console.log(error.response);
    return {
      success: false,
      response: error.response.data.message,
    };
  }
});
const userActions = {
  login,
  reIngress,
};

export default userActions;
