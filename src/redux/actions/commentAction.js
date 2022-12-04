import { createAsyncThunk } from "@reduxjs/toolkit";
import { base_url } from "../../api/url";
import axios from "axios";

const getComments = createAsyncThunk("getComments", async (id) => {
  const show = id;
  const res = await axios.get(`${base_url}comments/?showId=${show}`);
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
      console.log(res.data);
      return {
        listComment: res.data.comment,
      };
    } catch (error) {
      console.log(error.message);
    }
  });
  const deleteComment = createAsyncThunk("deleteComment", async (data) => {
    const id = data.id;
    const token= data.token;
    let headers = { headers: { Authorization: `Bearer ${token}` } };
    const res = await axios.delete(`${base_url}comments/${id}`,headers);
    console.log(res.data);
    return {
       
        deleteComments: res.data.id,
    };
  });
  const editComment = createAsyncThunk("editComment", async (info) => {
    const {id, data,token } = info;
    let headers = { headers: { Authorization: `Bearer ${token}` } };
    const res = await axios.patch(`${base_url}comments/${id}`,data,headers);
    return {
        listComment: res.data.id,
    };
  });

const commentAction = {
    getComments,
    createComment,
    deleteComment,
    editComment
  };
  
  export default commentAction;