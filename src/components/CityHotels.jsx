import React from "react";
import { useState } from "react";
import places from "../data/places";
import FormSelect from "./FormSelect";
import SearchBar from "./FormText";

export default function CityHotels() {
  let placess = places;
  let [filterText, SetFilterText] = useState("");
  let inputSearch = (text) => {
    SetFilterText(text.target.value);
  };
  let ArrayFiltered = placess.filter((place) =>
    place.name.toLowerCase().includes(filterText.toLowerCase())
  );
  if ({ ArrayFiltered } === 0) {
    ArrayFiltered = placess;
  }

  return (
    <>
      <div className="filters">
        <div><SearchBar value={filterText} onChange={inputSearch} /></div>
        <div><FormSelect/></div>
      </div>
    
      {ArrayFiltered.map((place) => {
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
