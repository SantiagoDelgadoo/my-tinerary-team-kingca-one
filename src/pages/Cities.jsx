import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import CardCity from '../components/CardCity'
import Label from '../components/Label'
import cities from '../data/cities'
export default function Cities() {
    let [cities,setCities] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8000/api/city/')
        .then((response)=>setCities(response.data.cities))
    },[]) 
    console.log(cities);
    let listOfContinents =[...new Set (cities.map(cities=>cities.continent))]
    console.log(listOfContinents); 
    let [inputSearch, setInputSearch] =useState("");
    let [checks, setChecks] =useState ([]);
    let search = (event) => {setInputSearch(event.target.value) 
    console.log(event.target.value);
    }
    let checksChecked = (event) => {
    if (event.target.checked){
        setChecks(checks.concat(event.target.value))
    }
    else {
        setChecks(checks.filter(check=>check!=event.target.value))
    }
    }

    console.log(checks);
    let [citiesFiltered,setCitiesFiltered] = useState([])
    function peticionContinent (){
        let peticion = ""
        for (const check of checks) {
            peticion +=
            `&continent=${check}` 
        }
        return peticion
    }
    console.log(peticionContinent());
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/city/?name=${inputSearch}${peticionContinent()}`)
        .then((response)=>setCitiesFiltered(response.data.cities))
    },[inputSearch,checks]) 
    console.log(inputSearch);
    return (
    <>
    <div className='ContainerHeaderCities'>
        <div className='TitulosDeCities'>
        <h3 className='subtituloCities'>Where would you like to go?</h3>
        <h1 className='tituloCities'><span className="colorNaranjaDeLinea">| </span>WE HAVE THE BEST DESTINATIONS FOR YOU</h1>
        </div>
    </div>
    <div className='containerSearchCheck'>
    <fieldset className='containerSearchCheck' onChange={checksChecked} > {listOfContinents.map(continent=><Label key={continent} cities={continent}/>)}</fieldset>
    <label className='containerSearchcities'>
            <input className='searchCities' onChange={search} type="search" placeholder='Search here for the name of the city you want'/>
    </label>
        </div>
    <div className='containerCardsCities'>
    {citiesFiltered.map(cities=><CardCity key = {cities.name} cities={cities}/>)}
    </div>
    </>
  )
}
