import React from "react";
import { useParams } from "react-router-dom";
import places from "../data/places";

export default function CardDetailsHotel() {
  let { id } = useParams();
  console.log(id);
  let hotel = places.find((place) => place.id === id);

  console.log(hotel);
  return (
    <div className="cardDetailsHotel">
      <div className="cardPhoto">
        <img src={hotel.photo[0]} alt="" />
      </div>

      <div className="cardText">
        <h2>{hotel.name}</h2>
        <p>{hotel.description}</p>
        <p><span>Capacity: </span>{hotel.capacity}</p>
      </div>
    </div>
  );
}
