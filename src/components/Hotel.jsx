import React from 'react'
import { useParams } from 'react-router-dom';
import places from '../data/places';
export default function Hotel(props) {
    let {id} = useParams ()
    let hotelCapture = places.find(place=>place.cityId===id)
    console.log(hotelCapture);
    console.log(id);
    let {object} = props
  return (
    <div className='cardDetails'>
        <div className='fatherPhoto'>
        <img src={object.photo} className= "ImgDetails" alt="Image Of Cities" />
        </div>
        <div className='fatherDescription'>
            <h3 className='titleCities'>{object.name}</h3>
            <p className='descriptionCities'>{object.capacity}</p>
            <p className='descriptionCities'>{object.description}</p>
        </div>
    </div>
  )
}
