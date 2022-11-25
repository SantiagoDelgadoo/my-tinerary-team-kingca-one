import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import cities from '../data/cities'
import { useEffect } from 'react';
import axios from 'axios';
export default function CardDetails() {
    let {id} = useParams ()
   console.log(id);
   let [citiesCapture,setCitiesCapture] = useState([]) 
   useEffect(()=>{
    axios.get(`http://localhost:8000/api/city/${id}`)
    .then((response)=>setCitiesCapture(response.data.id))
},[]) 
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
