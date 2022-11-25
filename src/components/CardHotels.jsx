import React from "react";
import { useState, useEffect } from "react";
import SearchBar from "./FormText";
import { Link as NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import hotelsAction from "../redux/actions/hotelsAction";

export default function CardHotels() {
  let [data, setData] = useState({ name: "", order: "" });
  const listFiltered = useSelector((store) => store.hotelsReducer.listFiltered);
  const dispatch = useDispatch();
  let inputSearch = (event) => {
    setData({ ...data, name: event.target.value });
  };

  let inputOrder = (event) => {
    setData({ ...data, order: event.target.value });
  };
  useEffect(() => {
    dispatch(hotelsAction.filterHotels(data));
  }, [data]);
  return (
    <>
      <div className="filters">
        <div>
          <SearchBar onChange={inputSearch} />
        </div>
        <div>
          <form action="" className="filter-select">
            <select onChange={inputOrder}>
              <option value="">Choose an option</option>
              <option value="ASC">Ascending order</option>
              <option value="DESC">Descending order</option>
            </select>
          </form>
        </div>
      </div>

      {listFiltered.map((place) => {
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
