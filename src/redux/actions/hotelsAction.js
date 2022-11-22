import { createAsyncThunk } from "@reduxjs/toolkit";
import { base_url } from "../../api/url";
import axios from "axios";

const filterHotels = createAsyncThunk("filterHotels", async (data) => {
  const inputText = data.name;
  const inputOrder = data.order;
  const res = await axios.get(
    `${base_url}/hotel/?name=${inputText}&order=${inputOrder}`
  );
  return {
    listFiltered: res.data.response,
  };
});

const hotelsAction = {
  filterHotels,
};

export default hotelsAction;
