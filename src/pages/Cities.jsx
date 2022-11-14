import React from 'react'
import { useState } from 'react'
import CardCity from '../components/CardCity'
import Label from '../components/Label'
import cities from '../data/cities'
export default function Cities() {
    let object = {
    Asia: false,
    Europa : false,
    America: false,
    Oceania: false
    }
    let listOfContinents = new Set (cities.map(cities=>cities.continent))
    let continents = []
    for (let continent of listOfContinents) {
        continents.push(continent)
    } 
    console.log(continents);
    let [inputSearch, setInputSearch] =useState("");
    let [checks, setChecks] =useState (object);
    let search = (event) => {setInputSearch(event.target.value) 
    console.log(event.target.value);
    }
    let checksChecked = (event) => {
        setChecks ((checks) => ({
            ...checks,
            [event.target.value] : event.target.checked
        })
            /* console.log("funciona") */
            )
    }
    console.log(checks);
  return (
    <>
    <div className='ContainerHeaderCities'>
        <div className='TitulosDeCities'>
        <h3 className='subtituloCities'>Where would you like to go?</h3>
        <h1 className='tituloCities'><span className="colorNaranjaDeLinea">| </span>WE HAVE THE BEST DESTINATIONS FOR YOU</h1>
        </div>
    </div>
    <div className='containerSearchCheck'>
    <fieldset className='containerSearchCheck' onChange={checksChecked} > {continents.map(continent=><Label key={continent} cities={continent}/>)}</fieldset>
    <label className='containerSearchcities'>
            <input className='searchCities' onChange={search} type="search" placeholder='Search here for the name of the city you want'/>
    </label>
        </div>
    <div className='containerCardsCities'>
    {cities.map(cities=><CardCity key = {cities.name} cities={cities}/>)}
    </div>
    </>
  )
}
