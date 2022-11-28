import { createAsyncThunk } from "@reduxjs/toolkit";
import { base_url } from "../../api/url";
import axios from "axios";

const getShowUser = createAsyncThunk("getShowUser", async (id) => {
  const user = id;
  const res = await axios.get(`${base_url}/show/?userId=${user}`);
  return {
    showUser: res.data.id,
  };
});

const deleteShowUser = createAsyncThunk("deleteShowUser", async (data) => {
  const id = data.id;
  const token= data.token;
  let headers = { headers: { Authorization: `Bearer ${token}` } };
  const res = await axios.delete(`${base_url}/show/${id}`,headers);
  return {
    deleteShow: res.data.id,
  };
});

const editShowUser = createAsyncThunk("editShowUser", async (data) => {
  const { id,info,token } = data;
  let headers = { headers: { Authorization: `Bearer ${token}` } };
  const res = await axios.patch(`${base_url}/show/${id}`, info, headers);
  return {
    editShowUser: res.data.id,
  };
});

const createShowUser = createAsyncThunk("createShowUser", async (data) => {
  try {
    console.log(data);
    const res = await axios.post(`${base_url}show/`, data);
    return {
      createShow: res.data.id,
    };
  } catch (error) {
    console.log(error.message);
  }
});

const showAction = {
  getShowUser,
  deleteShowUser,
  editShowUser,
  createShowUser,
};

export default showAction;
