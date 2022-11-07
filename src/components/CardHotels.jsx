import React from "react";
import { useState } from "react";
import places from "../data/places";
import SearchBar from "./FormText";
import { Link as LinkRouter, NavLink } from 'react-router-dom'

export default function CardHotels() {
  let arrayOfPlaces = places;
  let [filterText, SetFilterText] = useState("");
  let [selectValue, setSelectValue] = useState("");
  let inputSearch = (text) => {
    SetFilterText(text.target.value);
  };

  let ArrayFiltered = arrayOfPlaces.filter((place) =>
    place.name.toLowerCase().includes(filterText.toLowerCase())
  );
  if ({ ArrayFiltered } === 0) {
    ArrayFiltered = arrayOfPlaces;
  }

  if (selectValue === "ASC") {
    ArrayFiltered.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
  } else if (selectValue === "DESC") {
    ArrayFiltered.sort((a, b) => {
      if (a.name > b.name) {
        return -1;
      }
      if (a.name < b.name) {
        return 1;
      }
      return 0;
    });
  }

  console.log(ArrayFiltered);

  return (
    <>
      <div className="filters">
        <div>
          <SearchBar value={filterText} onChange={inputSearch} />
        </div>
        <div>
          <form action="" className="filter-select">
            <select
              value={selectValue}
              onChange={(event) => setSelectValue(event.target.value)}
            >
              <option value="">Choose an option</option>
              <option value="ASC">Ascending order</option>
              <option value="DESC">Descending order</option>
            </select>
          </form>
        </div>
      </div>

      {ArrayFiltered.map((place) => {
        return (
          <div className="containerCards">
            <div className="cardImg">
              <img src={place.photo[0]} alt="photo of Place" />
              <h3 className="subtituloCitiesCard">{place.name}</h3>
            </div>
            <div>
              <button className="buttonDetailsCities">
                <NavLink to={`/detailsHotel/${place.id}`}>Details
                </NavLink> 
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}
