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

  const citiesFiltered = useSelector((store) => store.citiesReducer.listCities); //useselector me suscribe a un estado del redux, cada vez el array se actualiza por el reductor automaticamete se actualiza la const
  useEffect (()=>{
    dispatch(citiesAction.allCities()); //dispatch sirve para despachar acciones, adentro de los () se pasa la accion q cree de redux y si le quiero pasar algo mas a esa accion se pasa como data
  },[])
  const continents = useSelector((store) => store.citiesReducer.listContinents); //useselector me suscribe a un estado del redux, cada vez el array se actualiza por el reductor automaticamete se actualiza la const
  console.log(continents);
  const listOfContinents = [...new Set (continents.map(city=>city.continent))] //continents es un array con todas las ciudades, new set para q no repita
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

  }, [checks]);

  useEffect(() => {
    dispatch(citiesAction.getCities(data)); //dispatch sirve para despachar acciones, adentro de los () se pasa la accion q cree de redux y si le quiero pasar algo mas a esa accion se pasa como data
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
