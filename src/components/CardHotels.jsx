import React from "react";
import { useState, useEffect } from "react";
import SearchBar from "./FormText";
import { Link as NavLink } from "react-router-dom";
import { base_url } from "../api/url";
import axios from "axios";

export default function CardHotels() {
  let [hotels, setHotels] = useState([]);
  let [filterText, SetFilterText] = useState("");
  let [selectValue, setSelectValue] = useState("");
  let inputSearch = (text) => {
    SetFilterText(text.target.value);
  };

  useEffect(() => {
    axios
      .get(`${base_url}/api/hotel/?name=${filterText}&order=${selectValue}`)
      .then((response) => setHotels(response.data.response));
  }, [filterText, selectValue]);

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

      {hotels.map((place) => {
        return (
          <div className="containerCards" key={place._id}>
            <div className="cardImg">
              <img src={place.photo[0]} alt="photo of Place" />
              <h3 className="subtituloCitiesCard">{place.name}</h3>
            </div>
            <div>
              <button className="buttonDetailsCities">
                <NavLink to={`/detailsHotel/${place._id}`}>Details</NavLink>
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}
