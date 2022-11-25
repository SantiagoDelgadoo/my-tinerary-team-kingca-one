import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { base_url } from "../api/url";
import axios from "axios";

export default function CardDetailsHotel() {
  let { id } = useParams();
  let [hotel, setHotels] = useState([]);
  console.log(id);
  useEffect(() => {
    axios
      .get(`${base_url}/hotel/${id}`)
      .then((response) => setHotels(response.data.id));
  }, []);

  return (
    <div className="cardDetailsHotel">
      <div className="cardPhoto">
        <img src={hotel.photo} alt="" />
      </div>

      <div className="cardText">
        <h2>{hotel.name}</h2>
        <p>{hotel.description}</p>
        <p>
          <span>Capacity: </span>
          {hotel.capacity}
        </p>
      </div>
    </div>
  );
}
