import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import CardCity from "../components/CardCity";
import Label from "../components/Label";
import cities from "../data/cities";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../redux/store";
import citiesAction from "../redux/actions/citiesAction";
export default function Cities() {
  const dispatch = useDispatch();
  let [cities, setCities] = useState([]);
  let [inputSearch, setInputSearch] = useState("");
  let [checks, setChecks] = useState([]);
  let [data, setData] = useState({name:"",continent:""});

  const citiesFiltered = useSelector((store) => store.citiesReducer.listCities);
  useEffect (()=>{
    dispatch(citiesAction.allCities());
  },[])
  const continents = useSelector((store) => store.citiesReducer.listContinents);
  console.log(continents);
  const listOfContinents = [...new Set (continents.map(city=>city.continent))] 
  let search = (event) => {
    setInputSearch(event.target.value);
    setData({...data,name:event.target.value})
  };
  let checksChecked = (event) => {
    if (event.target.checked) {
      setChecks(checks.concat(event.target.value));
    } else {
      setChecks(checks.filter((check) => check != event.target.value));
    }
  };

  useEffect(() => {
    let continent = ""
    for (const check of checks) {
      continent += `&continent=${check}`;
    }
    setData({...data,
    continent:continent
    })

    /* console.log(data); */
  }, [checks]);
  console.log(data);
  /* useEffect(()=>{
        axios.get(`http://localhost:8000/api/city/?name=${inputSearch}${peticionContinent()}`)
        .then((response)=>setCitiesFiltered(response.data.cities))
    },[inputSearch,checks]) 
    console.log(inputSearch); */

  useEffect(() => {
    dispatch(citiesAction.getCities(data));
  }, [data]);
  return (
    <>
      <div className="ContainerHeaderCities">
        <div className="TitulosDeCities">
          <h3 className="subtituloCities">Where would you like to go?</h3>
          <h1 className="tituloCities">
            <span className="colorNaranjaDeLinea">| </span>WE HAVE THE BEST
            DESTINATIONS FOR YOU
          </h1>
        </div>
      </div>
      <div className="containerSearchCheck">
        <fieldset className="containerSearchCheck" onChange={checksChecked}>
          {" "}
          {listOfContinents.map((continent) => (
            <Label key={continent} cities={continent} />
          ))}
        </fieldset> 
        <label className="containerSearchcities">
          <input
            className="searchCities"
            onChange={search}
            type="search"
            placeholder="Search here for the name of the city you want"
          />
        </label>
      </div>
      <div className="containerCardsCities">
        {citiesFiltered.map((cities) => (
          <CardCity key={cities.name} cities={cities} />
        ))}
      </div>
    </>
  );
}
