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

const Logout= createAsyncThunk("Logout", async (data) => {
  const headers = { headers: { "Authorization":` Bearer ${data}` } };
  try {
    let user = await axios.post(`${base_url}auth/sign-out`, null, headers);
    return {
      success: true,
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
  console.log(headers);
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
const getUser = createAsyncThunk("getUser", async (userId) => {
  const user = userId;
  const res = await axios.get(`${base_url}/auth/${user}`);
  return {
    success: true,
    response: res.data,
  };
});
const editUser = createAsyncThunk("editUser", async (data) => {
  const { id, info } = data;
  const res = await axios.patch(`${base_url}auth/${id}`, info);
  console.log(res.data);
  return {
    editUser: res.data.id,
  };
});
const userActions = {
  login,
  reIngress,
  getUser,
  editUser,
  Logout
};

export default userActions;
