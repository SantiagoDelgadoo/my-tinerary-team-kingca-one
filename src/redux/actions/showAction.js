import { createAsyncThunk } from "@reduxjs/toolkit";
import { base_url } from "../../api/url";
import axios from "axios";

const getShowUser = createAsyncThunk("getShowUser", async () => {
  const user = "636e68db00607058e7cf0bac";
  const res = await axios.get(
    `${base_url}/show/?userId=${user}`
  );
  return {
    showUser: res.data.id,
  };
});

const deleteShowUser = createAsyncThunk("deleteShowUser", async (data) => {
    const id = data.id;
    const res = await axios.delete(
      `${base_url}/show/${id}`
    );
    return {
      deleteShow: res.data.id,
    };
  });

  const editShowUser = createAsyncThunk("editShowUser", async (data) => {
    const {id,info} = data;
    const res = await axios.patch(
      `${base_url}/show/${id}`,info
    );
    return {
      editShowUser: res.data.id,
    };
  });

const showAction = {
    getShowUser,
    deleteShowUser,
    editShowUser
};

export default showAction;
