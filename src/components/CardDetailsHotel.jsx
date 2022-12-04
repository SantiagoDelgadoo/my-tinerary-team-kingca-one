import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { base_url } from "../api/url";
import axios from "axios";

export default function CardDetailsHotel() {
  let { id } = useParams();
  let [hotel, setHotels] = useState([]);

  useEffect(() => {
    async function captureHotel (){
      const captureObject = await axios.get(`${base_url}/hotel/${id}`)
      setHotels(captureObject.data.id);
    }
    captureHotel()
    
  }, []);
  console.log(hotel.photo);
  return (
    <div className="cardDetailsHotel">
      <div className="cardPhoto">
        <img src={hotel.photo} alt="hotel" />
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
