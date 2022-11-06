import React from "react";
import { useState } from "react";
import places from "../data/places";
import SearchBar from "./FormText";

export default function CardHotels() {
  let placess = places;
  let [filterText, SetFilterText] = useState("");
  let [selectValue, setSelectValue] = useState("");
  let inputSearch = (text) => {
    SetFilterText(text.target.value);
  };

  let ArrayFiltered = placess.filter((place) =>
    place.name.toLowerCase().includes(filterText.toLowerCase())
  );
  if ({ ArrayFiltered } === 0) {
    ArrayFiltered = placess;
  }

  if(selectValue ==="ASC"){ 
    ArrayFiltered.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });}
  else if(selectValue ==="DESC"){
    ArrayFiltered.sort((a, b) => {
      if (a.name > b.name) {
        return -1;
      }
      if (a.name < b.name) {
        return 1;
      }
      return 0;
    });}
   
  console.log(ArrayFiltered);

  return (
    <>
      <div className="filters">
        <div>
          <SearchBar value={filterText} onChange={inputSearch} />
        </div>
        <div>
          <form action="" className="filter-select">
            <select value={selectValue} onChange={ (event) => setSelectValue( event.target.value)}>
              <option value="">Choose an option</option>
              <option value="ASC">Ascending order</option>
              <option value="DESC">Descending order</option>
            </select>
          </form>
        </div>
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
