import React from 'react'
import { useParams } from 'react-router-dom';
import cities from '../data/cities'
export default function CardDetails() {
    let {id} = useParams ()
   console.log(id);
   let citiesCapture = cities.find(city=>city.id===id
   )
   console.log(citiesCapture);
  return (

    <div className='cardDetails'>
        <div className='fatherPhoto'>
        <img src={citiesCapture.photo} className= "ImgDetails" alt="Image Of Cities" />
        </div>
        <div className='fatherDescription'>
            <h3 className='titleCities'>{citiesCapture.name}</h3>
            <p className='descriptionCities'>{citiesCapture.continent}</p>
            <p className='descriptionCities'>{citiesCapture.population}</p>
        </div>
    </div>

  )
}
