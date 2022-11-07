import React from 'react'
import { useParams } from 'react-router-dom';
import places from '../data/places';
export default function Hotel() {
    let {id} = useParams ()
    let hotelCapture = places.find(place=>place.cityId===id)
    console.log(hotelCapture);
    console.log(id);
  return (
    <div className='cardDetails'>
        <div className='fatherPhoto'>
        <img src={hotelCapture.photo[0]} className= "ImgDetails" alt="Image Of Cities" />
        </div>
        <div className='fatherDescription'>
            <h3 className='titleCities'>{hotelCapture.name}</h3>
            <p className='descriptionCities'>{hotelCapture.capacity}</p>
            <p className='descriptionCities'>{hotelCapture.description}</p>
        </div>
    </div>
  )
}
