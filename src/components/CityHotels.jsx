import React from "react";
import places from "../data/places";

export default function CityHotels() {
  let placess = places;

  return (
    <>
      {placess.map((place) => {
        return (
          <div className="card">
            <img className="cardPhoto" src={place.photo[0]} alt="" />
            <h2 className="titleCard">{place.name}</h2>
          </div>
        );
      })}
    </>
  );
}