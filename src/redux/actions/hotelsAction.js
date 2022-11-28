import { createAsyncThunk } from "@reduxjs/toolkit";
import { base_url } from "../../api/url";
import axios from "axios";

const filterHotels = createAsyncThunk("filterHotels", async (data) => {
  const inputText = data.name;
  const inputOrder = data.order;
  console.log(data);
  const res = await axios.get(
    `${base_url}/hotel/?name=${inputText}&order=${inputOrder}`
  );
  return {
    listFiltered: res.data.response,
  };
});
const getHotelAdmin = createAsyncThunk("getHotelAdmin", async (userId) => {
  const user = userId;
  const res = await axios.get(`${base_url}/hotel/?userId=${user}`);
  return {
    hotelAdmin: res.data.response,
  };
});

const deleteHotelAdmin = createAsyncThunk("deleteHotelAdmin", async (data) => {
  const id = data.id;
  const token= data.token;
  let headers = { headers: { Authorization: `Bearer ${token}` } };
  const res = await axios.delete(`${base_url}/hotel/${id}`,headers);
  return {
    deleteHotel: res.data.id,
  };
});

const editHotelAdmin = createAsyncThunk("editHotelAdmin", async (data) => {
  const { id, info,token } = data;
  let headers = { headers: { Authorization: `Bearer ${token}` } };
  const res = await axios.patch(`${base_url}/hotel/${id}`,info,headers);
  return {
    editHotelAdmin: res.data.id,
  };
});

const hotelsAction = {
  filterHotels,
  getHotelAdmin,
  deleteHotelAdmin,
  editHotelAdmin,
};

export default hotelsAction;
