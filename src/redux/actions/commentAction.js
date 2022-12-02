import { createAsyncThunk } from "@reduxjs/toolkit";
import { base_url } from "../../api/url";
import axios from "axios";

const getComments = createAsyncThunk("getComments", async (id) => {
  const show = id;
console.log(show);
  const res = await axios.get(`${base_url}comments/?showId=${show}`);
  console.log(res.data.response);
  return {
    listComment: {showId:id,
        arrayComment:res.data.response},
  };
});
const createComment = createAsyncThunk("createComment", async (data) => {
    try {
      console.log(data);
      let headers = { headers: { Authorization: `Bearer ${data.token}` } };
      const res = await axios.post(`${base_url}comments/`, data.data,headers);
      console.log(res.data.new_comment);
      return {
        listComment: res.data.new_comment,
      };
    } catch (error) {
      console.log(error.message);
    }
  });

const commentAction = {
    getComments,
    createComment
  };
  
  export default commentAction;